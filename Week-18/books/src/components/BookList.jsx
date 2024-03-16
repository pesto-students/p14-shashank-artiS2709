import React from 'react'
import Book from './Book';

function BookList() {
    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 },
        // Add more books if you'd like
      ];
      //const bookDetail = books.map(books=><li>{books.title} {books.author} {books.year}</li>)
      const bookInfo = books.map(books=><Book title={books.title} author={books.author} year={books.year}/>)
      return (
        <>
            {/* {bookDetail} */}
            {bookInfo}

        </>
    )
}

export default BookList
