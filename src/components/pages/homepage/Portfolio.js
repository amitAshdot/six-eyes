import React from 'react'
import MainBtn from '../../buttons/MainBtn'
import Iframe from '../../iframe/Iframe'
const Portfolio = () => {
    return (
        <div className="section_porfolio">
            <div className="row">
                <div className="porfolio__title">
                    <h2>porfolio__box</h2>
                </div>
                <div className="porfolio__box">
                    <div className="porfolio__item col-1-of-2">
                        <div className="porfolio__item__headline">
                            <h2>Mine-Sweeper</h2>
                        </div>
                        <div className="porfolio__item__content">
                             <button className='btn'> 
                                <a href="https://amitashdot.github.io/mine-sweeper/" target="_blank" rel="noopener noreferrer">DEMO</a>
                            </button>
                        </div>
                    </div>

                    <div className="porfolio__item col-1-of-2">
                        <div className="porfolio__item__headline">
                            <h2>OnAndOff</h2>
                        </div>
                        <div className="porfolio__item__content">
                                            {/* <Iframe source={'https://onandoff.co.il/'} /> */}


                            {/* <MainBtn class={'portfolio__item__btn'} text={'<a href="https://onandoff.co.il/">link </a>'} /> */}
                        <button className='btn'> 
                            <a href="https://onandoff.co.il/" target="_blank" rel="noopener noreferrer">DEMO</a>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
