import React from 'react'
import About from './About';
import Features from './Features';
import Portfolio from './Portfolio';
import Contact from './Contact'
const Homepage = () => {
    return (
        <div className="homepage" >
            <About />
            <Features />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Homepage

