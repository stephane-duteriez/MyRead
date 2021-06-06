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
              sheld={book.shelf}
              /> 
          </li>
        ))}
      </ol>
    )
};

BooksList.prototype = {
    books : PropTypes.array.isRequired
}

export default BooksList;