import React,{useState} from 'react'

function BookCard(props) {

    props.takeBookData(props.title)


    const handleBookData = (event) =>{
        event.preventDefault()
        console.log(props.title)
        // setBookData(props.title)
    }

    return (
        <div>
            <form onSubmit={props.takeBookData}>
            <img src = {props.img}></img>
            <p>{props.title}</p>
            <p>{props.author}</p>
            <p>{props.yearPublished}</p>
            <p>{props.publisher}</p>
            <p>{props.about}</p>
            <input type='button' value='add to reference'></input>
            <button type='submit'>cite this book</button>
            </form>
        </div>
    )
}

export default BookCard
