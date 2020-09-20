import React,{useRef, useState} from 'react'

import '../styling/copyField.css'

function CopyField(props) {

    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
        alert('citation copied to clipboard')
      };
    

    return (
        <div>
            <textarea type='text' ref = {textAreaRef} value={props.value} className='copy-field' rows="5" cols="33" wrap="hard"></textarea>
            <button onClick={copyToClipboard}>copy text</button>
        </div>
    )
}

export default CopyField

