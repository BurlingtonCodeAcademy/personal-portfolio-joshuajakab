import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    return(
        <div>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
            <Link to={'/About'}>
                <button>About</button>
            </Link>
            <Link to={'/Portfolio'}>
                <button>Portfolio</button>
            </Link>
        </div>
    )
}

export default Header