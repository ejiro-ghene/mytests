import React from 'react'
import './index.css'
import Subscribe from '../components/subscribe';

function index() {
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

            <div className="learnable-container">
                <div className="blue-bg-img">
                    <img src={require('../img/smile.png')} alt=""/>
                </div>
                <div className="text-bg">
                    <div>
                    <h2>Learnable</h2>
                        <p>
                            Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it.
                        </p>
                    <p className="sm-text">
                        LEARN MORE
                    </p>
                    </div>
                    
                </div>
            </div>

            <div className="agora learnable-container">
                <div className="text-bg">
                    <div>
                    <h2>Agora</h2>
                        <p>
                        We are reimagining the workplace and how people work. Find out how our co-working spaces can help you enjoy the work that you do.
                        </p>
                    <p className="sm-text">
                        LEARN MORE
                    </p>
                    </div>
                    
                </div>
                <div className="blue-bg-img">
                    <img src={require('../img/agora.png')} alt=""/>
                </div>
            </div>

            <div className="startzone learnable-container">
                <div className="blue-bg-img">
                    <img src={require('../img/startzone.png')} alt=""/>
                </div>
                <div className="text-bg">
                    <div>
                    <h2>StartZone</h2>
                        <p>
                        The business environment is harsh for early-stage businesses. We can help you rise above it all.
                        </p>
                    <p className="sm-text">
                        HERE'S HOW
                    </p>
                    </div>
                    
                </div>
            </div>

            <div className="others-container">
                <div className="others learnable-container">
                    <div className="blue-bg-img">
                        <div className="others-img-title">
                            <img src={require('../img/Rectangle 42.png')} alt="" />
                            <span className='colored-text others-text-md'>
                                Genesys <br/>Ignite
                            </span>
                        </div>
                        
                        <div className="others-img">
                            <div>
                                <img src={require('../img/Rectangle 38.png')} alt="" />
                                <p className='colored-text others-text-sm'>CodeVille</p>
                            </div>
                            <div>
                                <img src={require('../img/Rectangle 38 (1).png')} alt="" />
                                <p className='colored-text others-text-sm'>Pink summer of code</p>
                            </div>
                        </div>
                    </div>
                    <div className='others-title'>
                        <div>
                            <h1 className="colored-text other-text-bg">Other things we do</h1>   
                        </div>
                        
                    </div>
                </div>            
            </div>
            <div className="blue-bg learnable-container">
                <div className="blue-bg-img">
                    <img src={require('../img/blue-bg-img.png')} alt=""/>
                </div>
                <div className="text-bg">
                    <div>
                    <h2>The best team in the world</h2>
                    <p>We work with the most amazing people our industry has to offer. They are really passionate about making a difference</p>
                    <span className="sm-text">
                    SEE TEAM
                    </span>
                    </div>
                    
                </div>
            </div>

            <section className="subscribe-container">
                <div className='sub-img'>
                    <img src={require('../img/back to Top.png')} alt=""/>
                </div>

                <div className="subscribe-bg">
                    <div className="sub-content">
                        <p>Stay up to date on what we <br/>
                        are doing and new learning <br/>
                        opportunities
                        </p>
                    </div>
                    <div className="sub">
                        <section className="sub-mail">
                            <div className="email">
                                <input type="email" name="" id="" placeholder='Your Email'/>
                                <button>subscribe</button><br/>
                                <span>View Privacy Policy</span>
                            </div>   
                        </section>
                        <div className="sub-button">
                        </div>
                    </div>
                    
                </div>

            </section>

        </>
    )

    
}

export default index
