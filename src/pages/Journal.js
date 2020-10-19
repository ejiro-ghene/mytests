import React from 'react'
import './Journal.css'
import Grid from  '../components/Grid-4'

function Journal() {
    return <>

        <section className='journal-header'>
            <div className=""><h1>Journal</h1></div>
            <div>
                <button>CATEGORIES</button>
            </div>
        </section>

        <section className="journal-hero">
            <div className="hero-img">
                <img src={require('../img/Photo (2).png')} alt=""/>
            </div>
            <div className="hero-content">
                <p className='grid-head'>INSPIRATION</p>
                <p className='grid-title'>
                    Learn Design Thinking like a Pro and Build Projects that People will care about
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sapien arcu vitae orci at molestie. Pharetra quisque donec accumsan rhoncus risus. Urna magna turpis duis imperdiet elit, et, hendrerit viverra risus. Vulputate euismod commodo donec tincidunt et, aliquam. Eget scelerisque netus habitant dui porttitor cursus. Ipsum sem ut tortor ac ullamcorper. Lacus.
                </p>
                <div className="hero-content-footer">
                    <img src={require('../img/Rectangle 44.png')} alt=""/>
                    <p className="hero-content-text">
                        David Mong, Apr 9, 2020
                    </p>
                </div>
                
            </div>
        </section>

        <section className='journal-grid'>
            <Grid />
            <Grid />
        </section>
        <div className="journal-load">
            <button>Load More</button>
        </div>


    </>
}

export default Journal
