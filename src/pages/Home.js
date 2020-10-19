import React from 'react'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'
import './home.css'

function Home() {
    return<>
        <header className="header-container">
             <div className="header-content">

                 <section className="text-one">
                    <h1>Coming soon: Learnable ‘20</h1>
                    <p>We've started taking in applications for the next batch of learnable interns. Applications are on till the 21st of Febuary</p>
                 </section>

                <section className="text-two">
                    <span>
                    Click link to download...
                    </span><br/>
                    <Link>Learnable ‘20 Brochure</Link>
                </section>
             </div>
             
         </header>

        <section className="hero">
                <div className="hero-text-container">
                        <section className="hero-text">
                            <h1>
                                Everything <br/>
                                is Learnable
                            </h1>

                            <p>
                            Learnable is the perfect product <br/>
                            development internship program brought to <br/>
                            you by Genesys.
                            </p>
                        </section>
                </div>

                <div className="media-section">
                <div className="hero-media">

                    <div className="explore">
                        <div className="explore-option-1">
                            <section className="circle-1">
                                <img src={require('../img/Rec 9.png')} alt=""/> 
                                
                                {/* <span className="text-1">
                                    Development
                                </span>
                                    
                                <span className="text-2">
                                    What to expect
                                </span> */}
                            </section>
                        </div>
                        <div className="explore-option-2"> 
                            <section className="circle-2">
                            <img src={require('../img/Rec 94.png')} alt=""/>

                                {/* <span className="text-3">
                                    Product Design
                                </span>
                                    
                                <span className="text-4">
                                    What to expect
                                </span> */}
                            </section>
                        </div>
                        
                    </div>
                    <div className="video-container">

                        <img src={require('../img/Rec 4.jpg')} alt=""/>

                    <div className="play-container-area">
                            <section className="play-button">
                                <div className="play-container-text">
                                    <span>Discover the Learnable Experience</span>
                                </div>
                            </section>
                    </div>
                    </div>
                    <div className="scroll-icon">
                    <img src={require('../img/Skip-arrow.png')} alt=""/>
                    </div>
                
                </div>

                <div className="statistics-container">
                    <section className="stat-item-1">
                        <span className="num1">
                            250
                        </span>

                        <span className="text1">
                            Small Businesses supported
                        </span>
                    </section>

                    <section className="stat-item-2">
                        <span className="num2">
                            8
                        </span>

                        <span className="text2">
                            StartUps Incubated
                        </span>
                    </section>

                    <section className="stat-item-3">
                        <span className="num3">
                            2100
                        </span>

                        <span className="text3">
                            Tech Enthusiasts
                        </span>
                    </section>

                    <section className="stat-item-4">
                        <span className="num4">
                            305
                        </span>

                        <span className="text4">
                        Young Software Developers Trained
                        </span>
                    </section>
                </div>
             </div>
                
                
         </section>
         
        <section className="people-great">
            <div className="great-peeps">
                <div className="content">
                    <div className="photo-container">
                        
                        
                        <div className="photo-mask-group">
                            <img src={require('../img/Cutout 1.png')} alt=""/>
                        </div>
                    </div>

                    <div className="photo-copy-container">
                        <span>
                            We Make People Great
                        </span>

                        <p>
                        As part of our calculated efforts to contribute to the emerging <br/>
                        knowledge and skills driven economy of Nigeria, Learnable is a <br/>
                        6-month product development training program with an emphasis <br/> 
                        on software programming and product design. It is for outstanding <br/> 
                        young individuals who are passionate about building a career in <br/> 
                        the software industry. <br/> 

                        We primarily educate and groom software developers and designers, preparing them for the industry. 
                        </p>

                    </div>
                        
                </div>
            </div>
        </section>
        
        <section className="learning-experience">
            <div className="experience-container">
                <img src={require('../img/Photo.png')} alt=""/>
            </div>

            <div className="experience-text">
                <h1>An Unusual Learning Experience</h1>
                <p>
                At Genesys, we believe in the learning processes as much as we believe in the results. By applying a combination of active and social learning methodologies, we create an environment that involves the learner in the learning process while providing avenues for collaboration and peer-to-peer mentorship.

                Our methods over the years have helped us discover ways to take education out of the classroom. We introduce our interns to learning by experimentation and problem-solving. To us, every task is an opportunity to learn.
                </p>

            </div>

        </section>
        
        <section className="home-5">
            <section className="content-container-home-5">
                <section className="dev-curriculum">
                <section className="program-with-JS"></section>
                <section className="control-with-git"></section>
                <section className="dev-with-React"></section>
                <section className="API-and-NodeJS"></section>
                <section className="data-with-mongoDB"></section>
                <section className="Heroku"></section>

                </section>
                <section className="copy-element">
                    <span>FOR DEVELOPERS</span>
                    <section className="text-1">
                        <h2>Learn to Build Software the Right Way</h2>
                        <p>
                        We love to build stuff. Really awesome stuff. That’s why we have developed a learning program that will empower you to create amazing software the right way. <br/>

                        We believe in learning through experimentation. Our aim is to nurture and grow bright young minds from the get-go because that’s how our industry will thrive.
                        </p>
                    </section>
                </section>                

            </section>

        </section>
        </>
}

export default Home

{/* <img src={require('../img/Cutout 1.png')} alt=""/> */}