import React from 'react'
import "./ImageGallery.css"

const path : string = "./src/assets/images/magic_pyramid/"

const items = [
    {
        "text": "first",
        "image": "magicpyramid_1.png"
    },
    {
        "text": "second",
        "image": "magicpyramid_2.png"
    },
    {
        "text": "third",
        "image": "magicpyramid_3.png"
    },
    {
        "text": "fourth",
        "image": "magicpyramid_4.png"
    },
    {
        "text": "fifth",
        "image": "magicpyramid_5.png"
    }
]

function loadImages() : JSX.Element {

    return (
        <ul className="image-gallery-container">
            {items.map((items)=>(
            <li>
                <p>{items.text}</p>
                <img className="magic-pyramid" src={path + items.image} alt="magicpyramid" />
            </li>))}

        </ul>
    )

}

const ImageGallery = () => {
    return (
        <div>
            {loadImages()}
        </div>
    )
}

export default ImageGallery
