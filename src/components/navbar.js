import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src={require('../img/logo.jpg')} alt=""/>
                    </Link>
                    <Link to="/softwareDesigners">LEARNABLE</Link>
                    <Link to="/productDesigners">AGORA</Link>
                    <Link to="/apply">STARTZONE</Link>
                    <Link to="/journal">ABOUT</Link>
                    <Link to="/faq">CONTACT</Link>
                </div>
                <div className="nav-button">
                    <span>build a product with</span>
                    <button>
                        <Link to="/faq">DEVSTUDIO</Link>
                    </button>

                </div>

            </nav>
        </>
    
}

export default Navbar

