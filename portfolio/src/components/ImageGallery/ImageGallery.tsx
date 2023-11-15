import React from 'react'
import { useState } from 'react'
import './ImageGallery.css'
import ImageCard from '../ImageCard/ImageCard'
import GalleryCenterpiece from '../GalleryCenterpiece/GalleryCenterpiece'

const path : string = "./src/assets/images/magic_pyramid/"

interface ImageGalleryProps { 
    entries: { header: string, techstack: string, text: string[], images: string[], iframe?: string }[]
}

const ImageGallery: React.FC<ImageGalleryProps> = ({entries}) => {
    const [items, setItems] = useState(entries)
    const [itemSelected, setItemSelected] = useState(false)
    const [selectedItem, setSelectedItem] = useState({"header": "", "techstack": "", "text": [""], "images": [""]})

    function handleItemClick(item: { header: string, techstack: string, text: string[]; images: string[], iframe?: string }) {
        setSelectedItem(item);
        setItemSelected(true);
      }
    
    function setGalleryView() : JSX.Element {
        if (!itemSelected) {
            return (
                <div className="image-gallery-container">
                    <ul>
                        {items.map((item)=>(
                            <li key={item.header} onClick={() => handleItemClick(item)}>
                                <ImageCard path={path} entry={{header: item.header, techstack: item.techstack, text: item.text[0], image: item.images[0]}} />
                            </li>))}
                    </ul>
                </div>

            )
        } else {
            return (
                <div onClick={() => {setItemSelected(false)}}>
                    <GalleryCenterpiece key={selectedItem.header} path={path} content={selectedItem} />
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
