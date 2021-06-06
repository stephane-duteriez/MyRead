import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';

function BooksList(props) {
  return (
    <ol className="books-grid">
      {props.books.map((book)=>(
        <li key={book.title}>
          <Book 
            author={book.autor}
            title={book.title}
            image={book.image}
            shelf={book.shelf}
            onChangeShelf={(shelf) => {
              console.log({...book, shelf :shelf});
              props.onChangeShelf({...book, shelf :parseInt(shelf, 10)});
            }}
            /> 
        </li>
      ))}
    </ol>
  )
};

BooksList.prototype = {
    books : PropTypes.array.isRequired,
    onChangeShelf : PropTypes.func.isRequired
}

export default BooksList;