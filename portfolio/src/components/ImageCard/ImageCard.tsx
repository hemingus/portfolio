import React from 'react'
import './ImageCard.css'

interface ImageCardProps {
    path : string
    entry : {header: string, text: string, image: string}
}

const ImageCard: React.FC<ImageCardProps> = ({path, entry}) => {

    return (
        <div className="ImageCard">
            <h2>{entry.header}</h2>
            <img src={path + entry.image} alt="image" />
            <p>{entry.text}</p>
        </div>
    )
}

export default ImageCard