import React ,{useState , useEffect} from 'react'
import BookCard from '../components/BookCard'
import SearchBar from '../components/SearchBar'
import axios from 'axios'




function Home(props) {

    const [search,setSearch] = useState('')
    const [books, setBooks] = useState([])
    const [apiKey, setApiKey] = useState('AIzaSyCa42bMq37sPkbLbdlCpVJmUZSQhwijnWA')


    const handleChange = (event) =>{
        // const theInput = event.target.value;
        setSearch(event.target.value)
    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        axios.get (`https://www.googleapis.com/books/v1/volumes?q=`+search+`&maxResults=20`)
        .then(res=>{
            setBooks(res.data.items)
            console.log(books)
        })
    }


    
    const callCards = (cardData) => {
        return(
            <BookCard
            title = {cardData.volumeInfo.title}
            author ={cardData.volumeInfo.authors}
            img = {cardData.volumeInfo.imageLinks.thumbnail}
            yearPublished={cardData.volumeInfo.publishedDate}
            publisher = {cardData.volumeInfo.publisher}
            />

        )
    }





    return (
        <div>
            <SearchBar 
            onSubmit ={handleSubmit}
            onChange = {handleChange}         
            />
            <div>
                {books.map(callCards)}
                
            </div>
        </div>
    )
}

export default Home
