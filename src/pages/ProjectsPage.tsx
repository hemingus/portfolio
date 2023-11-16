import jsonData from '../portfolio_data.json'
import ImageGallery from '../components/ImageGallery/ImageGallery'

const projects = jsonData.projects

const ProjectsPage = () => {
    return (
        <>
            <h1>Projects</h1>
            <ImageGallery entries={projects} />
        </>
    )
}

export default ProjectsPage