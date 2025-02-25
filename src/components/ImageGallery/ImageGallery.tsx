import React from 'react'
import { useState, useEffect } from 'react'
import './ImageGallery.css'
import ImageCard from '../ImageCard/ImageCard'
import GalleryCenterpiece from '../GalleryCenterpiece/GalleryCenterpiece'
import ProjectDetailsPage from '../../pages/ProjectDetailsPage'
import { Link, useNavigate } from 'react-router-dom'

interface ImageGalleryProps { 
    entries: { header: string, techstack: string, text: string[], images: string[], iframe?: string }[]
}

const ImageGallery: React.FC<ImageGalleryProps> = ({entries}) => {
    const [items, setItems] = useState(entries)
    
    const navigate = useNavigate()

    useEffect(() => {
        setItems(entries)
    },[entries])
    
    function handleItemClick(item: { header: string, techstack: string, text: string[]; images: string[], iframe?: string }) {
        navigate(`/projects/${item.header.toLowerCase().replace(/\s+/g, "-")}`)
    }

            return (
                <div className="image-gallery-container">
                    <ul>
                        {items.map((item)=>(
                            <li key={item.header} onClick={() => handleItemClick(item)}>
                                <ImageCard entry={{header: item.header, techstack: item.techstack, text: item.text[0], image: item.images[0]}} />
                            </li>))}
                    </ul>
                </div>

            )
}

export default ImageGallery
