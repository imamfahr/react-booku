import React from 'react'

function Button(props) {
    return (
        <button className='pre-styled-button'>
            {props.name}
        </button>
    )
}

export default Button
