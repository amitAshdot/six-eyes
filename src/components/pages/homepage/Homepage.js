import React, {useState, useEffect , useRef, useCallback} from 'react'
import About from './About';
import Features from './Features';
import Portfolio from './Portfolio';
import Contact from './Contact'
const Homepage = () => {
   const [scrollHieght, setscrollHieght] = useState({reached:false})
 useEffect(() => {
         window.addEventListener('scroll', handleScroll);
     return () => {
          window.removeEventListener('scroll', handleScroll);
     }
 }, [])
   
const handleScroll = e => {
    let element = e.target.scrollingElement
    let sectionAbout = document.getElementsByClassName("section-about");
    let scrollTop = e.srcElement.body.scrollTop,
    itemTranslate = Math.min(0, scrollTop/3 - 60);
    if ( element.scrollTop >= sectionAbout[0].clientHeight-100) {
        setscrollHieght({reached : true})
    }
    else{
        setscrollHieght({reached : false})
    }
  }
    return (
        <div className="homepage"  >
            <About />
            <Features startAnimation={scrollHieght.reached}/>
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Homepage

