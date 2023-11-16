import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'


const HomePage = () => {
    const onButtonClick = () => {
        const pdfUrl = "./src/assets/images/magic_pyramid/CVeng_Heming Hanevik.png";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CVeng_Heming Hanevik.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

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
            <h3>Check out out some of my projects</h3>
            <div className="link-container">
                <Link className="link-button" to="/projects">Projects</Link>
                <Link className="link-button" to="/about">About</Link>
            </div>
            <h4>Get my CV:</h4>
            <button onClick={onButtonClick}>
                    Download PDF
            </button> 
            <a href="https://www.linkedin.com/in/heming-hanevik-395220129/" target="_blank">LinkedIn</a>
            <a href="https://github.com/hemingus" target="_blank">GitHub</a>
        </div>
    )
}

export default HomePage