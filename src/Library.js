import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf.js';
import { shelfs, labelShelfs } from './Constantes';
import PropTypes from 'prop-types';

function Library (porps) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {[shelfs.currentlyReading, shelfs.wantToRead, shelfs.read].map((shelf) => (
          <BookShelf
            key={shelf}
            books={porps.books.filter((book) => (book.shelf === shelf))}
            titleShelf={labelShelfs[shelf]}
            onChangeShelf={porps.modifyBook} />
        ))}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

Library.propTypes = {
  books: PropTypes.array.isRequired,
  modifyBook: PropTypes.func.isRequired
};

export default Library;
