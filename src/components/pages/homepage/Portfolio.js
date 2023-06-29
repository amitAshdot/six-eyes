import React from 'react'
import img2048 from '../../../images/2048_logo.svg.png'
import minsweeperImg from '../../../images/Tfavicon.png'
const Portfolio = () => {
    return (
        <div className="section_porfolio" id="porfolio">
            <div className="row">
                <div className="porfolio__title">
                    <h2>Some Fun (Games)</h2>
                </div>
                <div className="porfolio__box">
                    <div className="porfolio__item col-1-of-3">
                        <a href="https://amitashdot.github.io/mine-sweeper/" target="_blank" rel="noopener noreferrer" className="porfolio__item__btn btn">
                            <h2>Mine-Sweeper</h2>
                            <img src={minsweeperImg} alt="mine-sweeper symbol" className="porfolio__item__image" />
                        </a>
                    </div>
                    <div className="porfolio__item col-1-of-3">
                        <a href="https://amitashdot.github.io/2048/" target="_blank" rel="noopener noreferrer" className="porfolio__item__btn btn ">
                            <h2>2048</h2>
                            <img src={img2048} alt="2048 symbol" className="porfolio__item__image" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Portfolio
