import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

export default function Footer() {
    return <>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    
                    <section className="footer-links">
                        <Link to="/productDesigners">BUILD SOFTWARE</Link><br/>
                        <Link to="/apply">DESIGN DIFFERENT</Link><br/>
                        <Link to="/journal">APPLY YOUR KNOWLEDGE</Link><br/>
                        <Link to="/faq">FAQ</Link><br/>
                    </section>
                    
                    <section className="contact-us">
                        <span>
                            <p>
                            Our Local Campus center: Kilometer 7, Enugu/Port Harcourt, Expressway, Centenary City, Enugu. Nigeria
                            </p>
                        </span>
                        <Link to="/faq">GET IN TOUCH</Link>
                    </section>

                    <section className="devstudio">
                        <img src={require('../img/image 32.jpg')} alt=""/>
                        <span>Learnable is proud to be a collaborative effort of all the arms of our product team
                        <Link to="/faq"> HEAD TO DEVSTUDIO</Link>
                        </span>
                    </section>
                </div>

                <div className='social-copyright-container'>
                     <section className="social-media">
                        <Link>Twitter</Link>
                        <Link>Facebook</Link>
                        <Link>LinkIn</Link>
                        <Link>Instagram</Link>
                        <Link>Youtube</Link>
                        <Link>Vimeo</Link>
                    </section>
                       
                    <section className="copyright">
                        <span>Genesys 2020</span>
                        <span>Privacy Statement</span>
                    </section>
                </div>

                
            </div>
        </footer>
    </>
}
