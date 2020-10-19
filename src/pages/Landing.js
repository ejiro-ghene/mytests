import React from 'react'
import './Landing.css'

const Landing = () => {
    return (
        <>
            <section className="landing-hero">
                <div className="landing-hero-content">
                    <h2>
                        Genesys provides opportunities for young Nigerian techies and opportunities to grow and innovate.
                    </h2>
                    <p>
                        We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities.
                    </p>
                </div>
            </section>
            <div className="landing-hero-bg">
                <div className="landing-hero-arrow">
                    <img src={require('../img/Skip to Next Section.png')} alt=""/>
                </div>
                <div className="landing-hero-bg-img"></div>
            </div>

            <div className="text-zone">
                
            </div>

            <div className="blue-bg">
                <div className="blue-bg-img">
                    <img src={require('../img/blue-bg-img.png')} alt=""/>
                </div>
                <div className="text-bg">
                    <div>
                    <h2>The best team in the world</h2>
                    <p>We work with the most amazing people our industry has to offer. They are really passionate about making a difference</p>
                    <p className="sm-text">
                    See team
                    </p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Landing
