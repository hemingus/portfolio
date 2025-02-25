import './App.css'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ProjectDetailsPage from './pages/ProjectDetailsPage'

function App() {
  return (
    <>
      <div className="App-container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/projects/:projectName" element={<ProjectDetailsPage/>}/>
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
