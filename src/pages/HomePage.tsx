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
            <h2 className="grid-item-full">&lt;Frontend Developer /&gt;</h2>
            <div className="portrait-box"></div>
            <p>
                <span className="text-2rem"> Hi,  I'm Heming</span><br/>
                I am a newly graduated student of Data Technology
                looking for work as a frontend developer.
                As a life-long musician, i love to be creative.
                
            </p>
            <h3 className="grid-item-full">Check out my projects, or learn more about me</h3>
            <div className="link-container">
                <Link className="link-button" to="/projects">Projects</Link>
                <Link className="link-button" to="/about">About</Link>
            </div>
            <div className="footer-container">
                <h4>Get my CV:</h4>
                <button onClick={onButtonClick}>
                        Download PDF
                </button> 
                <a href="https://www.linkedin.com/in/heming-hanevik-395220129/" target="_blank">LinkedIn</a>
                <a href="https://github.com/hemingus" target="_blank">GitHub</a>
            </div>
        </div>
    )
}

export default HomePage