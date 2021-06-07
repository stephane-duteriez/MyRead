import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';

function BooksList(props) {
  return (
    <ol className="books-grid">
      {props.books.map((book)=>(
        <li key={book.id}>
          <Book 
            author={book.authors.join(', ')}
            title={book.title}
            image={book.imageLinks.smallThumbnail}
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

BooksList.protypes = {
    books : PropTypes.array.isRequired,
    onChangeShelf : PropTypes.func.isRequired
}

export default BooksList;