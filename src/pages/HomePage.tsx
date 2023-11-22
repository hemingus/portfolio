import { Link } from 'react-router-dom'
import './HomePage.css'


const HomePage = () => {
    const onButtonClick = () => {
        const pdfUrl = "/CVeng_Heming Hanevik.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CVeng_Heming Hanevik.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="HomePage-container">
            <h1 className="grid-item-full">Heming Hanevik</h1>
            <h2 className="grid-item-full">&lt;Frontend Developer /&gt;</h2>
            <div className="portrait-box"></div>
            <p className="grid-item-2">
                <span className="text-3rem"> Hi,  I'm Heming</span><br/>
                With an interest for <span className="text-2rem">functionality and design</span>,<br/>
                and a fresh degree in <span className="text-2rem">data technology</span>,<br/>
                I am looking for work as a frontend developer.
            </p>
            <div>
                <label>Get my CV:</label>
                <button onClick={onButtonClick}>
                        Download PDF
                </button> 
            </div>
            <h3 className="grid-item-2">Check out my projects, or read more about me</h3>
            <div className="link-container">
                <Link className="link-button" to="/projects">Projects</Link>
                <Link className="link-button" to="/about">About</Link>
            </div>

            <div className="footer-container">
                <a href="https://www.linkedin.com/in/heming-hanevik-395220129/" target="_blank">LinkedIn</a>
                <a href="https://github.com/hemingus" target="_blank">GitHub</a>
            </div>
        </div>
    )
}

export default HomePage