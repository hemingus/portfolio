import React, { useState, useEffect } from "react"
import "./ImageCarousel.css"

interface ImageCarouselProps {
  images: string[]
  path: string
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, path }) => {
    const [index, setIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)

    useEffect(() => {
        if (!isPlaying) return
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [isPlaying])

    return (
    <div className="carousel-container">
        <div className="center-image-frame">
            <img 
            key={index}
            className="center-image"
            src={path + images[index]}
            />
            <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="playButton"
            >
                {isPlaying ?  "⏸️" : "▶️"}
            </button>
        </div>
        <div className="carousel-image-container">
            {images.map((image, i) => <img 
            className="carousel-image"
            key={i}
            src={path + image}
            style={ i === index ? 
                {
                opacity: 0,
                zIndex: -10,
                animation: "pull-out 1s ease"} 
                : 
                {}}
            onClick={() => setIndex(i)}
            />)}
        </div>
    </div>
    );
};

export default ImageCarousel;
