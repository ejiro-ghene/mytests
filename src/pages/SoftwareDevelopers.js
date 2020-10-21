import React from 'react'
import './SoftwareDevelopers.css'
import Menu from '../components/Menu';
import Subscribe from '../components/subscribe';

const SoftwareDevelopers = () => {
    return (
        <>
        <Menu/>
        <div className='software-container'>    
            <div className="software-hero">
                <div className="hero-container">
                    <p className="title">
                        The Learnable Software Developer
                    </p>
                    <p className="hero-text">
                        Creativity means a lot to us. So we look for people who can think both logistically and artistically, and who know that limits are made to be pushed. We value skill and aptitude, but we honor those who care about working with their team to add the Genesys flavour to every project. 
                        <br/><br/>
                        As a developer, being part of the team exposes you to a range of diverse, like-minded talented people who are sure to make the experience fun for you. You’ll get a shot at building amazing things, developing yourself, learning on the job, while exchanging healthy jokes and having random hangouts once in a while.

                    </p>
                </div>    
                <div className="hero-img">
                    <img src={require('../img/Cutout 1.png')} alt=""/>
                </div>
            </div>

            <div className="quote">
                <p>
                    “You are someone people can count on. Every day, you come in ready to make great things happen.”
                </p>
            </div>

            <div className="group-97">
                <div className="img">
                    <img src={require('../img/laptop.png')} alt=""/>
                </div>
                <div className="text">
                    <h3>We expect you to…</h3><br/><br/>
                    <p>
                        Play nice with other people. <br/><br/>

                        Be an actively engaging person. That means you are present, motivated, and social. You know how to communicate effectively with your teammates.<br/><br/>

                        Love to code. You understand the basics of programming and object-oriented design and development.<br/><br/>

                        Have an eye for detail. Your keen observation helps you catch discrepancies and fix them quickly.<br/><br/>

                        Be innately curious. Your love for technology is insatiable, so you’re always researching and experimenting. Learning new technical skills while on the job is something you look forward to.<br/><br/>

                        Appreciate good design. You want to make something that doesn't just work flawlessly but looks amazing.
                    </p>
                </div>
            </div>            
        </div>
        <Subscribe/>
        </>
    )
}

export default SoftwareDevelopers
