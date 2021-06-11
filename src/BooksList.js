import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';

function BooksList ({books, onChangeShelf}) {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <Book
            authors={book.authors && book.authors.join(', ')}
            title={book.title}
            image={book.imageLinks && book.imageLinks.smallThumbnail}
            shelf={book.shelf}
            onChangeShelf={(shelf) => {
              onChangeShelf(book, shelf);
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
