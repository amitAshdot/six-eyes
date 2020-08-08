import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBrain, faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import FeatureItem from './FeatureItem';

const Features = () => {
    const featuresArray = [
        { icon: faCoffee, headline: 'A Cup Of Coffee', text: "Where we meet, I will learn you vision and needs" },
        { icon: faBrain, headline: 'Brain Storm', text: "Where we will talk about design and features, there is a good chance i will offer new ideas as well." },
        { icon: faCode, headline: 'Coding', text: "Where I do the job done!, will work hard to make everhthing perfect and bugless" },
        { icon: faWindowMaximize, headline: 'Go Live', text: "After your premission, one of us will make the webste live and start track customers!" },
    ]

    const featuresItems = featuresArray.map((item, index) => {
        return (
            <div className="col-1-of-4" key={index}>
                <FeatureItem icon={featuresArray[index].icon} headline={featuresArray[index].headline} text={featuresArray[index].text} index={index} />
            </div>
        )
    })
    return (
        <div className="section-features">
            <h2 className="section-features__headline">
                The Process
            </h2>
            <div className="row" style={{ position: 'relative' }}>
                {featuresItems}

            </div>
        </div>
    )
}

export default Features
