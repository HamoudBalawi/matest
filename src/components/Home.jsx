import React from "react";
import { useState, useEffect} from "react";
import { API } from "../constants/Api";
import { Container} from "react-bootstrap";

function Home(){
  const [books, createBooks] = useState([]);
   const [error, setError]= useState([]);

    useEffect(function(){

        async function fetchBooks(){
            try {
                const response = await fetch(API);
                const json = await response.json()
                console.log(json)
                createBooks(json.data)

            }catch(error){
                 setError(error.toString())
            }
        }
    

        fetchBooks()
    }, []);
  
   if(error){
       return <div>{error}</div>
   }

    return <> 
           <Container>
               <h1 className="text-center">Home</h1>
               {books.map(function (book){
               return <div key={book.id}>{book.title}</div>;
              })} 
               
            </Container>
           </>
}
export default Home;