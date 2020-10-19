import React from 'react';
import './Faq.css'
import Menu from '../components/Menu';
import Subscribe from '../components/subscribe';

function Faq() {
    return ( 
        
        <section>
            <Menu/>
            <div className="faq-header">
                <div className='faq-text'>
                    <h1> FAQ </h1>
                </div>
                <div className='faq-img'>
                    <img src={require('../img/hand.png')} alt=""/>
                </div>
            </div>
            
            <div className='faq'>
                <div className="faq-content">
                    <p>How many people can attend a course? <i className='fa fa-arrow-down'></i></p>
                </div>
                <div className="faq-content">
                    <p>How many people can attend a course?</p>
                </div>
                <div className="faq-content">
                    <p>How many people can attend a course?</p>
                </div>
                <div className="faq-content">
                    <p>How many people can attend a course?</p>
                </div>
                <div className="faq-content">
                    <p>How many people can attend a course?</p>
                </div>
                <div className="faq-content">
                    <p>How many people can attend a course?</p>
                </div>
                <div className="faq-content">
                    <p>How many people can attend a course?</p>
                </div>
                <div className="faq-content">
                    <p>How many people can attend a course?</p>
                </div>
                <div className="faq-content">
                    <p>How many people can attend a course?</p>
                </div>
                <div className="faq-content">
                    <p>How many people can attend a course?</p>
                </div>
                <div className="faq-content">
                    <p>How many people can attend a course?</p>
                </div>
                <div className="faq-content">
                    <p>How many people can attend a course?</p>
                </div>
                <div className="faq-content">
                    <p>How many people can attend a course?</p>
                </div>
                <div className="faq-content">
                    <p>How many people can attend a course?</p>
                </div>
                <div className="faq-content">
                    <p>How many people can attend a course?</p>
                </div>
            </div>
            <Subscribe/>
        </section>
        
    )
}

export default Faq
