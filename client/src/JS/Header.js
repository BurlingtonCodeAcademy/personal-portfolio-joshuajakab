import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Images/Logo-01.svg'

function Header(props) {

    return (


        <div id="header">
            <img src={Logo} alt="logo"></img>
            <Link to={'/'}>
                <button id="home-button">Home</button>
            </Link>
            <Link to={'/About'}>
                <button id="about-button">About</button>
            </Link>
            <Link to={'/Portfolio'}>
                <button id="portfolio-button">Portfolio</button>
            </Link>
        </div>

    )
}

export default Header