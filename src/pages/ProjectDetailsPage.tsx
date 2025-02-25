import { useParams } from 'react-router-dom'

const ProjectDetailsPage = () => {
    const { projectName } = useParams<{projectName: string}>()
    return (
        <div>
            <h1>Project: {projectName}</h1>
        </div>
    )
}

export default ProjectDetailsPage