import React from 'react'

const MainBtn = (props) => {
    return (
        <button className={`mainBtn-back`} >
            <a class={`mainBtn ${props.class}`} href="#about">
                {props.text}
            </a>
        </button>
    )
}

export default MainBtn
