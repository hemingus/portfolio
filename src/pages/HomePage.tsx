import { Link } from 'react-router-dom'
import './HomePage.css'


const HomePage = () => {
    const onCVengClick = () => {
        const pdfUrl = "/CVeng_HemingHanevik.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CVeng_HemingHanevik.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const onCVnorClick = () => {
        const pdfUrl = "/CV_nor_HemingHanevik.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CV_nor_HemingHanevik.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="HomePage-container">
            <h1 className="grid-item-full">Heming Hanevik</h1>
            <div className="portrait-box"></div>
            <p className="grid-item-2">
                <span className="text-3rem"> Hi,  I'm Heming</span><br/>
                With an interest for <span className="text-2rem">functionality and design</span>,<br/>
                and a fresh degree in <span className="text-2rem">data technology</span>,<br/>
                I am looking for work as a frontend, backend or fullstack developer.
            </p>

            <div className="link-container">
                <Link className="link-button" to="/about">About</Link>
                <Link className="link-button" to="/projects">Projects</Link>  
            </div>

            <div className="flex-column">
                <label>Get my CV:</label>
                <button onClick={onCVnorClick}>
                        Download PDF (nor)
                </button> 
                <button onClick={onCVengClick}>
                        Download PDF (eng)
                </button> 
            </div>
            <div className="footer-container">
                <a href="https://www.linkedin.com/in/heming-hanevik-395220129/" target="_blank">LinkedIn</a>
                <a href="https://github.com/hemingus" target="_blank">GitHub</a>
                <h3>@ Heming Hanevik Portfolio</h3>
            </div>
        </div>
    )
}

export default HomePage