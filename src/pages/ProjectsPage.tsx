import jsonData from '../portfolio_data.json'
import ImageGallery from '../components/ImageGallery/ImageGallery'
import './ProjectsPage.css'

const projects = jsonData.projects

const ProjectsPage = () => {
    return (
        <div className="ProjectsPage-container">
            <h1>Projects</h1>
            <ImageGallery entries={projects} />
        </div>
    )
}

export default ProjectsPage