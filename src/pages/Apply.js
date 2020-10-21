import React from 'react'
import './Apply.css'
import Menu from '../components/Menu';
import Subscribe from '../components/subscribe';
import {Link} from 'react-router-dom'

function Apply() {
    return (
        <section>
            <Menu />

            <div className="apply-header">
                <div className="apply-hero-content">
                    <p className='apply-grid-title'>
                        Apply Your Knowledge
                    </p>
                    <p className="apply-grid-content">
                        Before you’re done with Learnable, you will apply everything you’ve learned. You’ll be part of a team made up of 2 designers and 4 developers. You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, from the first pen sketches to the final functioning product. You’ll then get to show off your special project to everyone.
                    </p>
                </div>
                <div className="apply-hero-img">
                    <img src={require('../img/Rec 42.png')} alt=""/>
                </div>
            </div>

            <div className="apply-content">
                <div className="apply-content-img">
                    <img src={require('../img/Photo (2).png')} alt=""/>
                </div>
                <div className="content-articles">
                    <div className="articles">
                        <h1 className="article-title">How To Get In</h1>
                        <p className="article-content">
                            We are very deliberate with our selection process. We are on a quest to find amazing people who are passionate about learning and growing their careers in the software industry. To this end, we have designed our selection process to help us get such people.
                        </p>
                    </div>
                    <div className="articles">
                        <h1 className="article-title">Online Application</h1>
                        <p className="article-content">
                            Introduce yourself to us by filling out our application form. When you’re done filling out the form, proceed to download our prep curriculum that contains everything you need to prepare for the physical and technical assessment.
                        </p>
                        <Link className='apply-grid-head'>APPLY HERE</Link>
                    </div>
                    <div className="articles">
                        <h1 className="article-title">Phone Call Interviews</h1>
                        <p className="article-content">
                            We will reach out to you to discuss possible opportunities, ascertain where you fit in with us, and answer any questions you might have about the program. It’s supposed to be a chat, getting nervous defeats the aim.
                        </p>
                    </div>
                    <div className="articles">
                        <h1 className="article-title">Final Assessment</h1>
                        <p className="article-content">
                            At this stage, we’ll get to meet you in person for the first time. You’ll be invited to the hub for a physical assessment that includes a technical assessment, a psychometric test and a face-to-face chat with our team.
                        </p>
                    </div>
                    <div className="articles">
                        <h1 className="article-title">Get In</h1>
                        <p className="article-content">
                            If you make it to this stage, you can pack your bags and head down to the beautiful city of Enugu. We will join you on your journey to build that career of your dreams and provide all the help, support and love that we can muster along the way!
                        </p>
                    </div>

                    
                </div>
            </div>
            <Subscribe/>

       </section>
    )
}

export default Apply
