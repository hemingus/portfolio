import { useParams } from 'react-router-dom'
import { useProjects } from '../components/Context/ProjectsContext'

const ProjectDetailsPage = () => {
    const { projectName } = useParams<{ projectName: string }>()
    const projects = useProjects();
  
    const project = projects.find((p) => p.header.toLowerCase().replace(/\s+/g, "-") === projectName)
    const path = '/galleryimages/'
  
    if (!project) {
        return <h1>Project Not Found</h1>
    }
  
    return (
        <div>
            <h1>{project.header}</h1>
            <img src={path + project.images[0]} alt={project.header} />
            <p>{project.text}</p>
            <p>{project.techstack}</p>
        </div>
    );

}

export default ProjectDetailsPage