import { response } from 'express';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, StatusBar, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import api from './services/api';

/**Elementos no react native nao possum valor semantico e nem possuem estilizaçao propria
 * Nao possui herança de estilos
 */

export default function App() {

    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Teste ${Date.now()}`,
            owner: 'Rick'
        });

        const newProject = response.data;
        setProjects([...projects, newProject]);
    }

    return(
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}> 
            <FlatList // melhor performance em Listas com muitos elementos
                data={projects} // variavel onde contem os dados da lista - obrigatoriamente precisa ser um array
                keyExtractor={project => project.id} // pega o atributo unico de cada objeto
                renderItem={({item}) => (
                    <Text
                        style={styles.project}>
                        
                            {item.title}

                    </Text>
                )}
                    >

            </FlatList>
            <TouchableOpacity 
                style={styles.button}
                activeOpacity={0.7}
                onPress={handleAddProject}>
                <Text style={styles.buttonText}>Add Project</Text>
            </TouchableOpacity>
        </SafeAreaView>


        {/* <View style={styles.container}>
            {projects.map(project => (
                <Text key={project.id} 
                    style={styles.project}>
                       
                        {project.title}

                </Text>
            ))}
        </View> */}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7159c1',
        flex : 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    project : {
        color : '#fff',
        fontSize: 20,

    },
    button: {
        backgroundColor: '#fff',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});