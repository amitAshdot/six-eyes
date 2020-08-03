import React from 'react'

const MainBtn = (props) => {
    // const [mouseState, setmouseState] = useState({ mouseIn: false })
    // const styles = { transform: 'translate(' + mouseState.x + 'px,' + mouseState.y + 'px)' }

    // const onmousemove = (e) => { setmouseState({ ...mouseState, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }); }

    // const onMouseEnter = () => { setmouseState({ ...mouseState, mouseIn: true }) }

    // const onMouseLeave = () => { setmouseState({ ...mouseState, mouseIn: false }) }

    return (
        <button className={`mainBtn ${props.class}`}>
            {props.text}
        </button>
    )
}

export default MainBtn
