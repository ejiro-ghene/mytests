import React from 'react'
import './grid-4.css'

const Grid = () => {
    return (
        <div className='grid-4'>
            <div className='grid-child'>
                <img src={require('../img/image 23.png')} alt=""/>
                <p className='grid-head'>INSPIRATION</p>
                <p className='grid-title'>
                    Learn Design Thinking like a Pro and Build Projects that People will care about
                </p>
                <p className='grid-footer'>David Mong, Apr 9, 2020</p>
            </div>

            <div className='grid-child'>
                <img src={require('../img/image 23.png')} alt=""/>
                <p className='grid-head'>INSPIRATION</p>
                <p className='grid-title'>
                    Learn Design Thinking like a Pro and Build Projects that People will care about
                </p>
                <p className='grid-footer'>David Mong, Apr 9, 2020</p>
            </div>

            <div className='grid-child'>
                <img src={require('../img/image 23.png')} alt=""/>
                <p className='grid-head'>INSPIRATION</p>
                <p className='grid-title'>
                    Learn Design Thinking like a Pro and Build Projects that People will care about
                </p>
                <p className='grid-footer'>David Mong, Apr 9, 2020</p>
            </div>

            <div className='grid-child'>
                <img src={require('../img/image 24.png')} alt=""/>
                <p className='grid-head'>INSPIRATION</p>
                <p className='grid-title'>
                    Learn Design Thinking like a Pro and Build Projects that People will care about
                </p>
                <p className='grid-footer'>David Mong, Apr 9, 2020</p>
            </div>
        </div>
    )
}

export default Grid;