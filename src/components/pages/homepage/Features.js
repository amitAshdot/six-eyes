import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBrain, faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import FeatureItem from './FeatureItem';

const Features = (props) => {
    const { startAnimation } = props

    const featuresArray = [
        { icon: faCoffee, headline: 'A Cup Of Coffee', text: "I will get to know you, learn your vision and needs" },
        { icon: faBrain, headline: 'Brain Storm', text: "Design, features, animaion" },
        { icon: faCode, headline: 'Coding', text: "Where I get the job done!, will work hard to make everhthing perfect." },
        { icon: faWindowMaximize, headline: 'Go Live', text: "that's it! your website is LIVE! " },
    ]

    const featuresItems = featuresArray.map((item, index) => {
        return (
            <div className="col-1-of-4" key={index}>
                <FeatureItem icon={featuresArray[index].icon} headline={featuresArray[index].headline} text={featuresArray[index].text} index={index} />
            </div>
        )
    })

    return (
        <div className="section-features" id="features">
            <h2 className="section-features__headline">
                The Process
            </h2>
            {startAnimation ?
                <div className="row" style={{ position: 'relative' }}>
                    {featuresItems}
                </div> :
                null}
        </div>
    )
}

export default Features