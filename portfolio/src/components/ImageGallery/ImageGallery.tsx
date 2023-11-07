import React from 'react'
import { useState } from 'react'
import './ImageGallery.css'
import ImageCard from '../ImageCard/ImageCard'
import GalleryCenterpiece from '../GalleryCenterpiece/GalleryCenterpiece'

const path : string = "./src/assets/images/magic_pyramid/"

interface ImageGalleryProps { 
    entries: {header: string, text: string, image: string}[]
}

const ImageGallery: React.FC<ImageGalleryProps> = ({entries}) => {
    const [items, setItems] = useState(entries)
    const [itemSelected, setItemSelected] = useState(false)
    const [selectedItem, setSelectedItem] = useState({"header": "", "text": "", "image": ""})

    function handleItemClick(item: { header: string; text: string; image: string }) {
        setSelectedItem(item);
        setItemSelected(true);
      }
    
    function setGalleryView() : JSX.Element {
        if (!itemSelected) {
            return (
                <div className="image-gallery-container">
                    <ul>
                        {items.map((item)=>(
                            <li key={item.text} onClick={() => handleItemClick(item)}>
                                <ImageCard path={path} entry={item} />
                            </li>))}
                    </ul>
                </div>

            )
        } else {
            return (
                <div onClick={() => {setItemSelected(false)}}>
                    <GalleryCenterpiece path={path} content={selectedItem} />
                </div>
            )
        }
    }

    return (
        <div>
            {setGalleryView()}
        </div>
    )
}

export default ImageGallery
