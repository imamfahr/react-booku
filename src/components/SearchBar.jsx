import React, {useState} from 'react'

function SearchBar(props) {
    return (
        <div>
            <form onSubmit = {props.onSubmit}>
                <input onChange = {props.onChange} type='text' value = {props.value}></input>
                <button type = 'submit'>find books</button>
            </form >
        </div>
    )
}

export default SearchBar
