import React, {useState} from 'react';
import Header from './components/Header';

function App() {
    /**
     * O Hook useState() retorna um array com duas posiçoes.
     * 1- A primeira com a variavel contento seu valor inicial - Ex: projects
     * 2- A segunda é uma função utilizada para atualizar essa variavel. - Ex: setProjects
     */
    const [projects, setProjects] = useState(['App Mobile' , 'Front Web', "Mobile Flutter"]) ;
    
    function handleAddProject(){
        
        setProjects([...projects, `Adding a new project test ${Date.now()}`])

        console.log(projects);
    }

    return (
        <div>
            <Header title="Learning Projects" />
            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}> Add Project </button>

        </div>
    );
        
}

export default App;