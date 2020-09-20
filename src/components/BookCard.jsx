import React,{useState} from 'react'

function BookCard(props) {


    const handleBookData = (event) =>{
        event.preventDefault()
        console.log(props.title)
        let authorName = props.author[0]
        let res = authorName.split(' ').reverse().join(',')
        let restAuthor = props.author.slice(1)
        let allAuthor = [res, ...restAuthor]

        props.setGetBookData(`${allAuthor}. (${props.yearPublished.substring(0,4)}). ${props.title}. ${props.publisher}`)
    }

    return (
        <div>
            <form >
            <img src = {props.img}></img>
            <p>{props.title}</p>
            <p>{props.author}</p>
            <p>{props.yearPublished}</p>
            <p>{props.publisher}</p>
            <p>{props.about}</p>
            <input type='button' value='add to reference'></input>
            <button type='submit' onClick={handleBookData}>cite this book</button>
            </form>
        </div>
    )
}

export default BookCard
