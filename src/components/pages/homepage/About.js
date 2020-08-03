import React from 'react'

const About = () => {
    return (
        <div className="section-about">
            <h2 className="section-about__headline">Front-End developer</h2>
            <div className="row">
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front ">
                            <div className="card__picture card__picture--1">
                            </div>
                            <h4 className="card__heading ">
                                <span className="card__heading-span card__heading-span--1">
                                    REACT.JS
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>Best Performance</li>
                                    <li>Super Realiable</li>
                                    <li>Made By Facebook</li>
                                    <li>Scalable</li>
                                    <li>Level: Advance</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back--1 ">
                            <div className="card__cta">
                                <a href="#popup" className="btn btn--white">Contact now!</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front ">
                            <div className="card__picture card__picture--2">
                            </div>
                            <h4 className="card__heading ">
                                <span className="card__heading-span card__heading-span--2">
                                    HTML5 CSS3
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>The Basic Off All Websites</li>
                                    <li>The Standard </li>
                                    <li>SEO Perfection</li>

                                    <li>Level: Advance</li>

                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back--2">
                            <div className="card__cta">
                                <a href="#popup" className="btn btn--white">Contact now!</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front ">
                            <div className="card__picture card__picture--3">
                            </div>
                            <h4 className="card__heading ">
                                <span className="card__heading-span card__heading-span--3">
                                    Java Script
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>Object Oriented Programming</li>
                                    <li>Light Weighted</li>
                                    <li>Client Side</li>

                                    <li>Level: Advance</li>

                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back--3">
                            <div className="card__cta">
                                <a href="#popup" className="btn btn--white">Contact now!</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front ">
                            <div className="card__picture card__picture--4">
                            </div>
                            <h4 className="card__heading ">
                                <span className="card__heading-span card__heading-span--4">
                                    SASS
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>Object Oriented Programming</li>
                                    <li>Light Weighted</li>
                                    <li>Client Side</li>

                                    <li>Level: Advance</li>

                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back--4">
                            <div className="card__cta">
                                <a href="#popup" className="btn btn--white">Contact now!</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front ">
                            <div className="card__picture card__picture--5">
                            </div>
                            <h4 className="card__heading ">
                                <span className="card__heading-span card__heading-span--5">
                                    REDUX
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>Object Oriented Programming</li>
                                    <li>Light Weighted</li>
                                    <li>Client Side</li>

                                    <li>Level: Advance</li>

                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back--5">
                            <div className="card__cta">
                                <a href="#popup" className="btn btn--white">Contact now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="section-about__card">
                <h2>React.JS</h2>
                <img src={reactImg} alt="react symbol" />
            </div> */}
        </div>
    )
}

export default About
