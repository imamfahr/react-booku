import React from 'react'

function BookCard(props) {



    const handleSubmit = (event) =>{
        event.preventDefault()
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <img src = {props.img}></img>
            <p>{props.title}</p>
            <p>{props.author}</p>
            <p>{props.yearPublished}</p>
            <p>{props.publisher}</p>
            <p>{props.about}</p>
            <button type='submit'></button>
            </form>
        </div>
    )
}

export default BookCard
