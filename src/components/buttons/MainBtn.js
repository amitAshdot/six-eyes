import React from 'react'

const MainBtn = (props) => {
    return (
        <button className={`mainBtn ${props.class}`} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default MainBtn
