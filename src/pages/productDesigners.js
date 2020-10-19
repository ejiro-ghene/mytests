import React from 'react'
import Menu from '../components/Menu';
import Subscribe from '../components/subscribe';

function productDesigners() {
    return (
        <>
            <Menu/>
            <h1>productDesigners</h1>

           <section className="productDesign">
                    <div className="hero-img">
                        <img src={require('../img/Photo (4).png')} alt=""/>
                    </div>
                    <div className="articles">
                        <h1 className="article-title">We expect you to…</h1>
                        <p className="article-content">
                            Play nice with other people.

                            Be an actively engaged person. That means you are present, motivated, and social.

                            Understand how to use the Figma design software

                            Be able to create initial design layouts with confidence and know-how to effectively communicate concepts to everyone on your team.

                            Have a basic understanding of design principles and theories
                            To have creative courage. This is a tough industry, only the brave and sturdy remain.
                            
                            Be prepared to defend your decisions and take constructive criticism.
                        </p>

                        <p>
                            To us, beauty without substance has no value. At Genesys, design thinking and execution are equally important, so we’re constantly on the lookout for not only the how but also the why.
                        </p>
                </div>
            </section>
            <Subscribe/>
        </>
    )
}

export default productDesigners
