import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'

function LPage() {
  return (
    <Container>
      <Row>
        <Col lg={8} xs={12}>
          <img
            src={require("../assets/undraw_book_lover_mkck.png")}
            className="img-lpage"
          />
        </Col>
        <Col lg={4} xs={12} middle ='lg'>
            
            <div className='landing-page-welcoming'>
            <div className='content-lp assistant'>Write your reference in just one click</div> 
            <button class='pre-styled-button lp-button poiret'><Link to = '/find-books' class='text-deco-none'>find book</Link></button>
            </div> 
               
            
        </Col>
      </Row>
    </Container>
  );
}

export default LPage;
