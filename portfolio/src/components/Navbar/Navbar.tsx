import React from 'react'
import { CustomLink } from '../../utilities/CustomLink'
import './Navbar.css'
import { useRef, useState } from 'react'

const navbarLinks = [
    {
        "title": "Home",
        "path": "/"
    },
    {
        "title": "Projects",
        "path": "/projects"
    },
    {
        "title": "About",
        "path": "/about"
    },
    {
        "title": "Contact",
        "path": "/contact"
    }
]

const Navbar = () => { 
    const lines = '\u2630'
    const navRef = useRef<HTMLElement>(null)
    const [btnText, setBtnText] = useState(lines)

    const handleClick = () => {
        showNavBar()
        setBtnText((prevText: string) =>
          prevText === lines ? "Close" : lines
        );
      };

    const showNavBar = () => {
        navRef.current?.classList.toggle("responsive_nav")
    }


    return (
        <div className="Navbar">
            <nav ref={navRef}>
                <ul>
                    {navbarLinks.map((link)=>(
                        <CustomLink key={link.title} to={link.path}>{link.title}</CustomLink>
                    ))}
                    <button onClick={handleClick}>{btnText}</button>
                </ul>
                
            </nav>
        </div>
    )
}

export default Navbar