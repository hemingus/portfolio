import React from 'react'
import jsonData from '../portfolio_data.json'
import ImageGallery from '../components/ImageGallery/ImageGallery'
import { Link } from 'react-router-dom'
import './Pages.css'

const projects = jsonData.projects

const HomePage = () => {
    return (
        <div className="HomePage-container">
            <h1>Heming Hanevik</h1>
            <h2>Junior Developer</h2>
            <h3 className="portrait-box">Welcome to my portfolio website!</h3>
            <p>Hi, my name is Heming.
                I am a newly graduated student of Data Technology
                looking for work as a software developer.
                As a life-long musician, i love to be creative.
                With my newfound passion for programming i wish to:
            </p>
            <p>-Contribute with my skills and knowledge.
                -Become part of a team where we learn and grow.
                -Get experience with larger systems.
            </p>
            <div className="link-container">
                <Link submit-tooltip="Check it out!" className="link-button" to="/projects">Projects</Link>
                <Link className="link-button" to="/projects">Other</Link>
            </div>      
        </div>
    )
}

export default HomePage