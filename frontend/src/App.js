import React, {useState, useEffect} from 'react';
import './styles/App.css';
import api from './servers/api';
import backgroundImg from './assets/background.jpg';
import Header from './components/Header';



function App() {
    /**
     * O Hook useState() retorna um array com duas posiçoes. 2 Parametros
     * 1- A primeira com a variavel contento seu valor inicial - Ex: projects
     * 2- A segunda é uma função utilizada para atualizar essa variavel. - Ex: setProjects
     */
    const [projects, setProjects] = useState([]) ; // Inicia o estado com um array vazio que vao ser os projetos cadastrados

    useEffect(() =>{
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, []);

    
    async function handleAddProject(){
        const response = await api.post('projects', {
            title: `Adding a new project test ${Date.now()}`,
            owner: 'Rick'
        });

        const project = response.data; // Pega o projeto q foi adicionado para inserir no final do array de projects
        setProjects([...projects, project]); // Cria um novo array carregando o conteudo que estava no antigo array mais o projeto adicionado

        //setProjects(projects.push(project));
        
        //setProjects([...projects, ]) // Cria um novo array com o que ja tinha antes mais o novo 

        console.log(projects);
    }

    
    return (
        <div>
            <Header title="Learning Projects" />
            <img src={backgroundImg} width={250} />
            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}> Add Project </button>

        </div>
    );
        
}

export default App;