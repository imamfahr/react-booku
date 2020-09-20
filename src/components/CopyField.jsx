import React,{useRef, useState} from 'react'
import { Container, Row, Col} from "react-bootstrap";
import Button from './Button'

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

        <Col className='p-2' center="lg" >
        {/* <div className='search-bar'>  */}
           
                <Row>
                <textarea type='text' ref = {textAreaRef} value={props.value} className='copy-field' rows="5" cols="33" wrap="hard"></textarea>
                <button onClick={copyToClipboard} className='copy-to-clipboard'ame='copy citation' >copy citation</button>
                </Row>
        {/* </div> */}
        </Col>
        
    )
}

export default CopyField

