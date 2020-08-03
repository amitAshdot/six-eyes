// import React, { useState, useEffect } from 'react'
import React from 'react'
import MainBtn from '../buttons/MainBtn';

const Header = () => {
    const ref = React.createRef();

    const handleClick = () =>
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

    return (
        <div className="App-header header">
            <div className="header__logo-box">
                <div className="header__logo">

                </div>
            </div>
            <div className="header__list">
                <ul className="header__list__ul">
                    <li className="header__list__ul--li" ref={ref}><a onClick={handleClick}>home</a></li>
                    <li className="header__list__ul--li" ref={ref}><a onClick={handleClick}>about</a></li>
                    <li className="header__list__ul--li" ref={ref}><a onClick={handleClick}>portfolio </a></li>
                    <li className="header__list__ul--li" ref={ref}><a onClick={handleClick}>contact </a></li>
                </ul>
            </div>
            <div className="header__text-box">
                <p className="header__text-box-p">Hi, I'm Amit, a front-end developer</p>
                <MainBtn class="header__text-box-button" text="see more &rarr;" />
            </div>
        </div>
    )
}

export default Header
