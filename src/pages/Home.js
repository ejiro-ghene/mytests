import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import Menu from '../components/Menu';
import Subscribe from '../components/subscribe';

function Home() {
    return <>
        <Menu/>
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
        
        <section className="home-hero">
            <div className="home-hero-header">
                <div className="home-hero-header-content home-container">
                    <h1 className="home-hero-content-title">Everything is Learnable</h1>
                    <p className="home-hero-content-text">
                        Learnable is the perfect product development internship program brought to you by Genesys.
                    </p>
                </div>
                <div className="home-hero-circles">
                    <div className="home-hero-bg carribean-green">
                        <div>
                            <span className="home-hero-bg-title">Development </span><span> {'>'}</span>
                            <p className="home-hero-bg-text"> What to expect</p>
                        </div>                
                    </div>
                    <div className="home-hero-bg space-cadet">
                        <div className="white-text">
                            <span className="home-hero-bg-title">Product Design</span><span> {'>'}</span>
                            <p className="home-hero-bg-text">What to expect</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="home-hero-media">
                <span className="home-hero-arrow-down"><img src={require('../img/Skip-arrow.png')} alt=""/></span>
                <div className="home-hero-media-video"><img src={require('../img/Rec 4.jpg')} alt=""/></div>
            </div>
            <div className="home-hero-grey">
                <span className="home-hero-grey-group">
                    <p className="home-hero-grey-number"></p>
                    <p className="home-hero-grey-text"></p>
                </span>
                <span className="home-hero-grey-group">
                    <p className="home-hero-grey-number"></p>
                    <p className="home-hero-grey-text"></p>
                </span>
                <span className="home-hero-grey-group">
                    <p className="home-hero-grey-number"></p>
                    <p className="home-hero-grey-text"></p>
                </span>
                <span className="home-hero-grey-group">
                    <p className="home-hero-grey-number"></p>
                    <p className="home-hero-grey-text"></p>
                </span>
            </div>
        </section>        
        
        <section className="people-great home-container">
            <div className="great-peeps">
                <div className="content">
                    <div className="photo-copy-container">
                        <div className="copy-text">
                            <h1>
                                We Make People Great
                            </h1>

                            <p>
                            As part of our calculated efforts to contribute to the emerging <br/>
                            knowledge and skills driven economy of Nigeria, Learnable is a <br/>
                            6-month product development training program with an emphasis <br/> 
                            on software programming and product design. It is for outstanding <br/> 
                            young individuals who are passionate about building a career in <br/> 
                            the software industry. <br/><br/>

                            We primarily educate and groom software developers and designers, preparing them for the industry. 
                            </p>
                        </div>
                    </div>
                        
                    <div className="photo-container">
                        
                        
                        <div className="hero-img">
                            <img src={require('../img/Cutout 1.png')} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        
        <section className="learning-experience">
            <div className="experience-container">
                <img src={require('../img/Photo.png')} alt=""/>
            </div>

            <div className="experience-text">
                <div>
                    <h1>An Unusual Learning Experience</h1>
                    <p>
                    At Genesys, we believe in the learning processes as much as we believe in the results. By applying a combination of active and social learning methodologies, we create an environment that involves the learner in the learning process while providing avenues for collaboration and peer-to-peer mentorship.

                    Our methods over the years have helped us discover ways to take education out of the classroom. We introduce our interns to learning by experimentation and problem-solving. To us, every task is an opportunity to learn.
                    </p>
                </div>
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

        <section className="people-great home-container">
            <div className="great-peeps">
                <div className="content">
                    <div className="photo-copy-container">
                        <div className="copy-text">
                            <h1>
                                Who is Eligible?
                            </h1>

                            <p>
                            To be a participant of lernable, you need to be a young and passionate person interested in launching a super tech career. You will need to have foundational knowledge in whatever learning path you are applying for and be available for the six month duration of the program.

                            To become a part of the Genesys family, you must express some of the qualities we consider important. You are someone that takes responsibilities and initiatives. You will also express the ability to produce quality stuff in good time with high consistency. 
                            We primarily educate and groom software developers and designers, preparing them for the industry. 
                            </p>
                        </div>
                    </div>
                        
                    <div className="learning-experience-0">                        
                        <div className="experience-container">
                            <img src={require('../img/Photo (11).png')} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section className="learning-experience-1">
            <div className="experience-container">
                <img src={require('../img/Photo (10).png')} alt=""/>
            </div>

            <div className="experience-text-1">
                <div>
                    <h1>Our Culture</h1>
                    <p>
                     Our culture are the unspoken things that make us who we are at Genesys. To become one of us, you need to be like the rest of us. We believe that excellence is a culture, and we are committed to a philosophy of consistent improvement in everything we do. We are passionate, candid and we trust in the power of collaboration.
                    </p>
                </div>
            </div>

        </section>





        <section className="learning-experience-2">
            <div className="experience-container">
                <img src={require('../img/Photo (10).png')} alt=""/>
            </div>

            <div className="experience-text-1">
                <div>
                    <h1>Apply Your Knowledge</h1>
                    <p>
                        Before you’re done with Learnable, you will apply everything you’ve learned. You’ll be part of a team made up of 2 designers and 4 developers. You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, from the first pen sketches to the final functioning product. You’ll then get to show off your special project to everyone.
                    </p>
                </div>
            </div>

        </section>
        <Subscribe/>
        </>
}

export default Home

{/* <img src={require('../img/Cutout 1.png')} alt=""/> */}