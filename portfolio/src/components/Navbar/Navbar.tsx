import React from 'react'
import { CustomLink } from '../../utilities/CustomLink'
import './Navbar.css'

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
    }
]



const Navbar = () => {
    return (
        <nav className="Navbar">
            <ul>
                {navbarLinks.map((link)=>(
                    <CustomLink key={link.title} to={link.path}>{link.title}</CustomLink>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar