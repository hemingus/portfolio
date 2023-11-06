import React from 'react'
import { useState, useEffect } from 'react'
import "./ImageGallery.css"

const path : string = "./src/assets/images/magic_pyramid/"

const data: {id: number, class: string, text: string, image: string}[] = [
    {
        "id": 0,
        "class": "image-gallery-item",
        "text": "Musician",
        "image": "kulturskulebandet.webp"
    },
    {   
        "id": 1,
        "class": "image-gallery-item",
        "text": "Aqua Culture",
        "image": "smoltanlegg.png"
    },
    {
        "id": 2,
        "class": "image-gallery-item",
        "text": "CV",
        "image": "CVeng_Heming Hanevik.png"
    },
    {
        "id": 3,
        "class": "image-gallery-item",
        "text": "Tetris",
        "image": "tetris_image1.png"
    },
    {
        "id": 4,
        "class": "image-gallery-item",
        "text": "Tetris",
        "image": "tetris_image2.png"
    }
]

const videoPath = "./src/assets/videos/INF101 Tetris.mp4"

const ImageGallery: React.FC = () => {
    const [items, setItems] = useState(data)
    const [itemSelected, setItemSelected] = useState(false)
    const [selectedItem, setSelectedItem] = useState({"id": 0, "class": "", "text": "", "image": ""})
    

    
    function loadImages() : JSX.Element {
        if (!itemSelected) {
            return (
                <div className="image-gallery-container">
                    <ul>
                        {items.map((item)=>(
                            <li className="image-gallery-item" onClick={() => {setSelectedItem(item); setItemSelected(true)}}>
                                <h2>{item.text}</h2>
                                <img src={path + item.image} alt="magicpyramid" />
                            </li>))}
                    </ul>
                </div>

            )
        } else {
            return (
                <div className="image-gallery-container">
                    <div className="image-gallery-centerpiece" onClick={() => {setItemSelected(false)}}>
                        <h2>{selectedItem.text}</h2>
                        <img src={path + selectedItem.image} alt="magicpyramid" />
                        <p>Om meg:
                        Jeg er Heming, en aspirerende front-end / full-stack utvikler.
                        Med lang bakgrunn som musiker har jeg , har jeg funnet en ny lidenskap i programmering.
                        Drives av å se nyttige, flotte eller gøyale applikasjoner kommer til live gjennom kode.
                        Jeg har nylig fullført en bachelorgrad i datateknologi ved Universitetet i Bergen.
                        Det har gitt meg et solid fundament for å videreutvikle meg innen programmering.
                        </p>
                        {/* <video controls width="640" height="360" loop poster={path + selectedItem.image}>
                            <source src={videoPath} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {loadImages()}
        </div>
    )
}

export default ImageGallery
