import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';

function BooksList (props) {
  return (
    <ol className="books-grid">
      {props.books.map((book) => (
        <li key={book.id}>
          <Book
            authors={book.authors && book.authors.join(', ')}
            title={book.title}
            image={book.imageLinks.smallThumbnail}
            shelf={book.shelf}
            onChangeShelf={(shelf) => {
              props.onChangeShelf(book, shelf);
            }}
            />
        </li>
      ))}
    </ol>
  );
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default BooksList;
