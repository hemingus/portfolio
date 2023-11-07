import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import VideoGallery from './components/VideoGallery/VideoGallery'
import jsonData from './portfolio_data.json'

const projects = jsonData.projects

function App() {
  

  return (
    <>
      <div className="App-container">
        <h1>Projects</h1>
        <ImageGallery entries={projects}/>
      </div>
    </>
  )
}

export default App
