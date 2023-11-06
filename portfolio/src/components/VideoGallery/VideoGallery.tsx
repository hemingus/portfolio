import React from 'react'
import "./VideoGallery.css"
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed'

const items: {title: string, embedId: string}[] = [
    {
        "title": "Funky guitar work",
        "embedId": "ctvOzJLhX4g"
    },
    {
        "title": "Foo Fighters - Pretender (Drum Cover)",
        "embedId": "uNGU8aEVJo0"
    },
    {
        "title": "Evolution of Rock",
        "embedId": "HTXG2Xy0dsU"
    }
]

function loadImages() : JSX.Element {

    return (
        <ul className="video-gallery-container">
            {items.map((items)=>(
            <li>
                <div className="video-gallery-item">
                    <YoutubeEmbed embedId={items.embedId} videoTitle={items.title} />
                </div>
            </li>))}

        </ul>
    )

}

const ImageGallery: React.FC = () => {
    return (
        <div>
            {loadImages()}
        </div>
    )
}

export default ImageGallery