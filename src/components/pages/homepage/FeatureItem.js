import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBrain, faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
const FeatureItem = (props) => {
    return (
        <div className="feature-box">
            <div className="feature-box__icon">
                <FontAwesomeIcon icon={props.icon} size="2x" />

            </div>
            <h3 className="heaging-tertiary u-margin-botton-small">
                {props.headline}
            </h3>
            <p className="feature-box__text">
                {props.text}
            </p>
        </div>
    )
}

export default FeatureItem
