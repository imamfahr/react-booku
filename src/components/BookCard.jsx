import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

function BookCard(props) {
  const handleBookData = (event) => {
    event.preventDefault();
    console.log(props.title);
    let authorName = props.author[0];
    let res = authorName.split(" ").reverse().join(",");
    let restAuthor = props.author.slice(1);
    let allAuthor = [res, ...restAuthor];

    props.setGetBookData(
      `${allAuthor}. (${props.yearPublished.substring(0, 4)}). ${
        props.title
      }. ${props.publisher}`
    );
  };

  return (
    <Card border="info"  className='card-books' >
      <form>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
          <Row>
            <Col lg={4}>
              <img src={props.img}></img>
            </Col>
            <Col lg={8}>
              <Card.Title>
                <p className='card-author'>{props.author}</p>
                <p className='card-year'>{props.yearPublished}</p>
                <p className='card-publisher'>{props.publisher}</p>
              </Card.Title>
            </Col>
            <Card.Text>
              <p
                className='about-card'
              >
                {props.about}
              </p>
            </Card.Text>
          </Row>
          <Row>
          <a href={props.preview} type='button' class="button-card"><button  class="button-card">preview</button></a>
            
            <button type="submit" onClick={handleBookData} class='button-card'>
              cite this book
            </button>
          </Row>
        </Card.Body>
      </form>
    </Card>
  );
}

export default BookCard;

// <div>
//     <form >
//     <img src = {props.img}></img>
//     <p>{props.title}</p>
//     <p>{props.author}</p>
//     <p>{props.yearPublished}</p>
//     <p>{props.publisher}</p>
//     <p>{props.about}</p>
//     <input type='button' value='add to reference'></input>
//     <button type='submit' onClick={handleBookData}>cite this book</button>
//     </form>
// </div>
