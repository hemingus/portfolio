import React from 'react'
import './GalleryCenterpiece.css'

interface GalleryCenterpieceProps {
    path: string
    content: {header: string, text: string, image: string}
}

const GalleryCenterpiece: React.FC<GalleryCenterpieceProps> = ({path, content}) => {
    return (
        <div className="GalleryCenterpieceBackground"> 
            <div className="GalleryCenterpiece">
                <h3>Click anywhere to go back</h3>
                <h2>{content.header}</h2>
                <p>{content.text}</p>
                <img src={path + content.image} alt="magicpyramid" />
            </div>
        </div>
    )
}

export default GalleryCenterpiece