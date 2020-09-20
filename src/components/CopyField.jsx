import React from 'react'

function CopyField(props) {
    return (
        <div>
            <input type='text' value={props.value}></input>
            <button onClick={props.onclick}>copy text</button>
        </div>
    )
}

export default CopyField
