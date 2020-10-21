import React from 'react'
import {Link} from 'react-router-dom';
import './menu.css'

function Menu() {
    return (
        <section className="menu-container">
            <div className="menu-bar">
                <Link to="/home">HOME</Link>
                <Link to="/softwaredevelopers">SOFTWARE DEVELOPERS</Link>
                <Link to="/productDesigners">PRODUCT DESIGNERS</Link>
                <Link to="/apply">APPLY</Link>
                <Link to="/journal">JOURNAL</Link>
                 <Link to="/faq">FAQ</Link>
               
            </div>
        </section>
       
       
    )
}

export default Menu
