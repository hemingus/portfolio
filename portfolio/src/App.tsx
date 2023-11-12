import './App.css'
import HomePage from './Pages/HomePage'
import ProjectsPage from './Pages/ProjectsPage'
import AboutPage from './Pages/AboutPage'
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
