import React from 'react'
import './GalleryCenterpiece.css'



interface GalleryCenterpieceProps {
    content: {header: string, techstack: string, text: string[], images: string[], iframe?: string}
}

const GalleryCenterpiece: React.FC<GalleryCenterpieceProps> = ({content}) => {

    const path='../../assets/images/'

    function DisplayText(): JSX.Element {
        return (
            <div>
                {content.text.map((text)=>(
                <p key={text}>{text}</p>
                ))}
            </div>
        )
    }

    function DisplayImages(): JSX.Element {
        return (
            <div className="image-grid">
                {content.images.map((image)=>(
                <img key={image} src={path + image} alt="image"/>
                ))}
            </div>
        )
    }

    function DisplayIframe(): JSX.Element {
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
                <h4>{content.techstack}</h4>
                {DisplayText()}
                {DisplayImages()}
                {DisplayIframe()}
            </div>
        </div>
    )
}

export default GalleryCenterpiece