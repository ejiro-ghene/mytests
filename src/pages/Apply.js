import React from 'react'
import './Apply.css'
import Menu from '../components/Menu';
import Subscribe from '../components/subscribe';

function Apply() {
    return (
        <section>
            <Menu />

            <div className="apply-header"></div>

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
                        <h1 className="article-title">How To Get In</h1>
                        <p className="article-content">
                            We are very deliberate with our selection process. We are on a quest to find amazing people who are passionate about learning and growing their careers in the software industry. To this end, we have designed our selection process to help us get such people.
                        </p>
                    </div>
                    <div className="articles">
                        <h1 className="article-title">How To Get In</h1>
                        <p className="article-content">
                            We are very deliberate with our selection process. We are on a quest to find amazing people who are passionate about learning and growing their careers in the software industry. To this end, we have designed our selection process to help us get such people.
                        </p>
                    </div>
                    <div className="articles">
                        <h1 className="article-title">How To Get In</h1>
                        <p className="article-content">
                            We are very deliberate with our selection process. We are on a quest to find amazing people who are passionate about learning and growing their careers in the software industry. To this end, we have designed our selection process to help us get such people.
                        </p>
                    </div>
                    <div className="articles">
                        <h1 className="article-title">How To Get In</h1>
                        <p className="article-content">
                            We are very deliberate with our selection process. We are on a quest to find amazing people who are passionate about learning and growing their careers in the software industry. To this end, we have designed our selection process to help us get such people.
                        </p>
                    </div>

                    
                </div>
            </div>
            <Subscribe/>

       </section>
    )
}

export default Apply
