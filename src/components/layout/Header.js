// import React, { useState, useEffect } from 'react'
import React, { useEffect, useState } from 'react'
import MainBtn from '../buttons/MainBtn';

const Header = () => {

    const [width, setwidth] = useState(0)
    const [animation, setanimation] = useState({
        firstEnd: false
    })

    useEffect(() => {
        const screenWidth = window.screen.availWidth;
        setwidth(screenWidth)
        setTimeout(() => { setanimation({ firstEnd: true }) }, 4000);
        return () => {
        }
    }, [])

    const ref = React.createRef();

    const checkStyleBottm = () => {
        if (animation.firstEnd) {
            return { animation: "typing 2.5s steps(14, end) forwards 4s,blink-caret 0.5s step-end infinite;" }
        }
        return { display: "none" }
    }

    const checkStyleUpper = () => {
        if (animation.firstEnd) {
            return { borderRight: "none", animation: "typing 2.5s steps(14, end) forwards 1.5s", animationFillMode: 'forwards' }
        }
    }

    const typpingTxt = (
        width < 600 ?
            <>
                <p className="header__text-box-p-1" style={checkStyleUpper()}>Hi, I'm Amit Ashdot,</p>
                <p className="header__text-box-p-2" style={checkStyleBottm()}>a front-end developer</p>
            </>
            : <p className="header__text-box-p" >Hi, I'm Amit, a front-end developer</p>
    )

    return (
        <div className="App-header header">
            <div className="header__logo-box">
                <div className="header__logo">
                </div>
            </div>
            <div className="header__list">
                <ul className="header__list__ul">
                    <li className="header__list__ul--li" ref={ref}><a href="#about">about</a></li>
                    <li className="header__list__ul--li" ref={ref}><a href="#features">features</a></li>
                    <li className="header__list__ul--li" ref={ref}><a href="#porfolio">portfolio </a></li>
                    <li className="header__list__ul--li" ref={ref}><a href="#book">contact </a></li>
                </ul>
            </div>
            <div className="header__text-box">
                {typpingTxt}
                <MainBtn class="header__text-box-button" text="see more &rarr;" />
            </div>
        </div>
    )
}

export default Header
