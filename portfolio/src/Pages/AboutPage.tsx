import React from 'react'
import { Link } from 'react-router-dom'
import './AboutPage.css'
import { useState } from 'react'

const AboutPage: React.FC = () => {

    const about_p1: JSX.Element = 
        <p>
            As a lifelong musician, spending countless hours on mastering the art,<br/>
            I eventually came to terms that it was too volatile as a career choice.<br/>
            Working other jobs to get by, I was searching for a new path in which I would thrive.<br/>
        </p>
    const about_p2: JSX.Element = 
        <p>
            First I picked up a bachelor degree in Economics.<br/>
            I learned a lot getting broad understanding of business life.<br/>
            But still, there was something missing.<br/>
            I needed something that catered more to my fundamentally creative nature.
        </p>

    const about_p3: JSX.Element =
        <p>
            Eventually I was led onto programming. Something that in the back of my head I had been curious about,<br/>
            but never really considered due to my musical pursuits.<br/>
            Being already in my early thirties, starting a new degree was both expensive and daunting.<br/>
            But I am really glad I did.<br/>
            Having obtained a degree in Data Technology. Programming has become my newfound passion.
        </p>
    const about_p4: JSX.Element =
        <p>
            I have learned so much, but I am just getting started.<br/>
            Curiosity, learning and honing my skills have always been core to me.<br/>
            I am rapidly progressing as a developer, learning something new every day.
        </p>

    const aboutText: JSX.Element[] = [about_p1, about_p2, about_p3, about_p4]
    const [readAll, setReadAll] = useState(false)
    const [count, setCount] = useState(1)

    function incCount() {
        setCount(Math.min(aboutText.length, count+1))
        if (count === aboutText.length-1) {
            setReadAll(true)
        }
    }

    function moreButton() {
        if (!readAll) {
            return (
                <button onClick={() => incCount()}>Read more</button>
            )
        }
        return <></>
    }

    return (
        <div>
            <h1>About</h1>
            <div className="AboutPage-container">
                <div className="AboutPage-col-3">
                    <section className="text-short">
                        <p>
                        With my newfound passion for programming i wish to:<br/>
                        - Contribute with my skills and knowledge. <br/>
                        - Become part of a team where we learn and grow. <br/>
                        - Get experience with larger systems. <br/>
                        </p>
                    </section>
                    <h2>Story and background</h2>
                    <section className="text-long">
                        {aboutText.slice(0, count).map((text)=>(text))}
                        {moreButton()}
                    </section> 
                </div>

                <p>
                    My previous work experience is from aquaculture,
                    and from playing and teaching music.
                </p>

                <section className="Image-section"> 
                    <img src="./src/assets/images/smoltanlegg_image1.png"></img>
                    <img className="AboutPage-col-2" src="./src/assets/images/smoltanlegg_image2.jpg"></img>
                    <img src="./src/assets/images/kulturskulebandet.jpg"></img>
                    <img className="AboutPage-col-2" src="./src/assets/images/kulturskulebandet.jpg"></img>
                </section>
                
            </div>
        </div>
    )
}

export default AboutPage