import React from 'react'
import './ImageCard.css'


interface ImageCardProps {
    entry : {header: string, techstack: string, text: string, image: string}
}

const ImageCard: React.FC<ImageCardProps> = ({entry}) => {
    
    const path='/galleryimages/'

    return (
        <div className="ImageCard">
            <h2>{entry.header}</h2>
            <img src={path + entry.image} alt="image" />
            <p>{entry.text}</p>
            <p>{entry.techstack}</p>
        </div>
    )
}

export default ImageCard