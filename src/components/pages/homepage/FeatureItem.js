import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, faBrain, faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

const FeatureItem = (props) => {

    const getTime=(i) =>{
        if(i===0)   return "0s"
        if(i===1)   return "0.5s"
        if(i===2)   return "1s"
        if(i===3)   return "1.5s"
    }
        const style = {  animationDelay: getTime(props.index)}

    return (
        <div className="feature-box" style={style}>
            <div className="feature-box__icon">
                <FontAwesomeIcon icon={props.icon} size="2x" />
            </div>
            <h3 className="heaging-tertiary u-margin-botton-small">
                {props.headline}
            </h3>
            <p className="feature-box__text">
                {props.text}
            </p>
            {props.index < 3 ? <p className={`section-features__next`}> &rang;&rang;</p> : null}
        </div>
    )
}

export default FeatureItem
