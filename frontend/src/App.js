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
    const [projects, setProjects] = useState([]) ;
    
    function handleAddProject(){
        
        setProjects([...projects, `Adding a new project test ${Date.now()}`]) // Cria um novo array com o que ja tinha antes mais o novo 

        console.log(projects);
    }

    useEffect(() =>{
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, []);

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