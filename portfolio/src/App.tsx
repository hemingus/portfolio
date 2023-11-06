import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import VideoGallery from './components/VideoGallery/VideoGallery'

function App() {
  

  return (
    <>
      <div className="App-container">
        <h1>Portfolio Website</h1>
        <p>Om meg:
                        Jeg er Heming, en aspirerende front-end / full-stack utvikler.
                        Med lang bakgrunn som musiker har jeg , har jeg funnet en ny lidenskap i programmering.
                        Drives av å se nyttige, flotte eller gøyale applikasjoner kommer til live gjennom kode.
                        Jeg har nylig fullført en bachelorgrad i datateknologi ved Universitetet i Bergen.
                        Det har gitt meg et solid fundament for å videreutvikle meg innen programmering.</p>
        <ImageGallery />
        {/* <VideoGallery /> */}
      </div>
    </>
  )
}

export default App
