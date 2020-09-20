import React, {useState} from 'react'
import Button from './Button'
import { Container, Row, Col} from "react-bootstrap";
import '../styling/copyField.css'

function SearchBar(props) {
    return (
        <Col className='p-2 mt-5' center="lg" >
        {/* <div className='search-bar'>  */}
            <form onSubmit = {props.onSubmit} >
                <Row>
                <input onChange = {props.onChange} type='text' value = {props.value} className='search-bar' placeholder='search title, author, or publisher. Ex: Juvinall, Mechanical Design '></input>
                <Button name ='find books'/>
                </Row>
            </form >
        {/* </div> */}
        </Col>
    )
}

export default SearchBar
