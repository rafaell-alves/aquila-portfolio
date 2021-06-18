import React from 'react'
import './Sign.css'

function Sign(props) {
    return (
        <div className="neon-sign">
            <h1 className="title">{props.title}</h1>
        </div>
    )
}

export default Sign

