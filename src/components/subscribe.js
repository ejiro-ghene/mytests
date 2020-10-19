import React from 'react'
import './subscribe.css'

function Subscribe() {
    return (
        <>
            <section className="subscribe-container">
                <div className='sub-img'>
                    <img src={require('../img/back to Top.png')} alt=""/>
                </div>

                <div className="subscribe">
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

export default Subscribe
