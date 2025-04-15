import { createContext, useContext } from "react"
import jsonData from '../../portfolio_data.json'

const projectsData = jsonData.projects

const ProjectsContext = createContext(projectsData)

export const useProjects = () => useContext(ProjectsContext)

export const ProjectsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ProjectsContext.Provider value={projectsData}>{children}</ProjectsContext.Provider>
}