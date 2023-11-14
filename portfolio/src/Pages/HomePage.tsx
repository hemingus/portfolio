import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'


const HomePage = () => {
    return (
        <div className="HomePage-container">
            <h1 className="grid-item-full">Heming Hanevik</h1>
            <h2 className="grid-item-full">Junior Developer</h2>
            <div className="portrait-box"></div>
            <p>
                Hi, my name is Heming.<br/>
                I am a newly graduated student of Data Technology
                looking for work as a software developer.
                As a life-long musician, i love to be creative.
                With my newfound passion for programming i wish to:
            </p>
            <p className="grid-item-full">
                -Contribute with my skills and knowledge. <br/>
                -Become part of a team where we learn and grow. <br/>
                -Get experience with larger systems. <br/>
            </p>
            <div className="link-container">
                <Link className="link-button" to="/projects">Projects</Link>
                <Link className="link-button" to="/about">About</Link>
            </div>
        </div>
    )
}

export default HomePage