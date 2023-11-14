import './App.css'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <>
      <div className="App-container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
