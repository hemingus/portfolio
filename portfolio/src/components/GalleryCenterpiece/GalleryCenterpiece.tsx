import React from 'react'
import './GalleryCenterpiece.css'

interface GalleryCenterpieceProps {
    path: string
    content: {header: string, text: string[], image: string[], iframe?: string}
}

const GalleryCenterpiece: React.FC<GalleryCenterpieceProps> = ({path, content}) => {

    function extra_images(): JSX.Element {
        if (content.image.length > 1) {
            return (
                <div>
                    {content.text.slice(1).map((text)=>(
                    <p>{text}</p>
                    ))}
                    {content.image.slice(1).map((image)=>(
                    <img src={path + image} />
                    ))}
                </div>
            )
        }
        return (
            <></>
        )
    }

    function show_iframe(): JSX.Element {
        if (content.iframe) {
            return (
                <iframe 
                title={content.header} 
                src={content.iframe}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
                </iframe>
            )
        }
        return <></>
    }

    return (
        <div className="GalleryCenterpieceBackground"> 
            <div className="GalleryCenterpiece">
                <h3>Click anywhere to go back</h3>
                <h2>{content.header}</h2>
                <p>{content.text[0]}</p>
                <img src={path + content.image[0]} alt="image" />
                {show_iframe()}
                {extra_images()}
            </div>
        </div>
    )
}

export default GalleryCenterpiece