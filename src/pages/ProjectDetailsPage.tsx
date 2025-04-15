import { useParams } from 'react-router-dom'
import { useProjects } from '../components/Context/ProjectsContext'
import ImageCarousel from '../components/ImageCarousel/ImageCarousel';
import './ProjectDetailsPage.css'

const ProjectDetailsPage = () => {
    const { projectName } = useParams<{ projectName: string }>()
    const projects = useProjects();
  
    const project = projects.find((p) => p.header.toLowerCase().replace(/\s+/g, "-") === projectName)
    const path = '/galleryimages/'
  
    if (!project) {
        return <h1>Project Not Found</h1>
    }
  
    return (
        <>
        <h1>{project.header}</h1>
        <div className="projectDetailsContainer">
            
            <div className="projectDetails-text">
                <p className="projectDetails-tech">{project.techstack}</p>
                {project.text.map((text)=>(
                    <p key={text}>{text}</p>
                ))}
            </div>
            <section className="projectDetails-images">
                <ImageCarousel images={project.images} path={path}/>
            </section>
        </div>
        </>
    );

}

export default ProjectDetailsPage