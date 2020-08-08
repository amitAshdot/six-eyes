import React from 'react'
// import MainBtn from '../../buttons/MainBtn'
// import Iframe from '../../iframe/Iframe'
import onandoffImg from '../../../images/onandoffImg.png'
import minsweeperImg from '../../../images/Tfavicon.png'
const Portfolio = () => {
    return (
        <div className="section_porfolio" id="porfolio">
            <div className="row">
                <div className="porfolio__title">
                    <h2>Recent Work</h2>
                </div>
                <div className="porfolio__box">
                    <div className="porfolio__item col-1-of-2">
                        <a href="https://amitashdot.github.io/mine-sweeper/" target="_blank" rel="noopener noreferrer" className="porfolio__item__btn btn">
                            <h2>Mine-Sweeper</h2>
                            <img src={minsweeperImg} alt="mine-sweeper symbol" className="porfolio__item__image" />
                        </a>
                    </div>
                    <div className="porfolio__item col-1-of-2">
                        <a href="https://onandoff.co.il/" target="_blank" rel="noopener noreferrer" className="porfolio__item__btn btn ">
                            <h2>OnAndOff</h2>
                            <img src={onandoffImg} alt="onandoff symbol" className="porfolio__item__image" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Portfolio
