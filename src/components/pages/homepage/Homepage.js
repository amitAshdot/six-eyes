import React, { useState, useEffect } from 'react'
import About from './About';
import Features from './Features';
import Portfolio from './Portfolio';
import Contact from './Contact'
import Footer from './Footer';
import Customers from './Customers';
const Homepage = () => {
    const [scrollHieght, setscrollHieght] = useState({ reachedFeatures: false, reachedAbout: false })
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrollHieght])

    const handleScroll = e => {
        let element = e.target.scrollingElement
        let sectionAbout = document.getElementsByClassName("section-about");
        let header = document.getElementsByClassName("header");
        if (element.scrollTop >= sectionAbout[0].clientHeight - 100) {
            setscrollHieght({ reachedFeatures: true })
        }
        else {
            setscrollHieght({ reachedFeatures: false })
        }
    }
    return (
        <div className="homepage"  >
            <About startAnimation={scrollHieght.reachedAbout} />
            <Features startAnimation={scrollHieght.reachedFeatures} />
            <Customers />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}

export default Homepage