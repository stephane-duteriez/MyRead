import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BooksList from './BooksList';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';

function SearchBook (props) {
  const [inputSearch, setInputSearch] = useState('');
  const [foundBooks, setFoundBook] = useState([]);
  const [error, setError] = useState('');

  let lastSearch = '';

  // construct dictionary for easy match
  const alreadyKnowBooks = {};
  props.currentBooks.forEach(book => {
    alreadyKnowBooks[book.id] = book;
  });

  function handleChange (evt) {
    setInputSearch(evt.target.value);
    lastSearch = evt.target.value;
    if (evt.target.value) {
      BooksAPI.search(evt.target.value, 5).then((respons) => {
        // if we received a response after we already change the input, wait for next query.
        if (lastSearch !== evt.target.value) {
          return;
        }
        if (respons.error) {
          setFoundBook([]);
          setError(respons.error);
        } else {
          setFoundBook(respons || []);
          setError('');
        }
      });
    } else {
      setFoundBook([]);
      setError('');
    }
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" value={inputSearch} onChange={handleChange}/>
          {error && (<div>Error : {error}</div>)}
        </div>
      </div>
      <div className="search-books-results">
          <BooksList
            books={foundBooks.map((book) => alreadyKnowBooks[book.id] || book)}
            onChangeShelf={props.onChangeShelf} />
      </div>
    </div>
  );
}

SearchBook.propTypes = {
  onChangeShelf: PropTypes.func.isRequired,
  currentBooks: PropTypes.array.isRequired
};

export default SearchBook;
