import './App.css'
import HomePage from './Pages/HomePage'
import ProjectsPage from './Pages/ProjectsPage'
import { Routes, Route } from 'react-router-dom'
import { CustomLink } from './utilities/CustomLink'
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <>
      <div className="App-container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
