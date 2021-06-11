import React from 'react';
import PropTypes from 'prop-types';
import BooksList from './BooksList.js';

function BookShelf ({books, titleShelf, onChangeShelf}) {
  return (
        <div className="bookshelf">
            {titleShelf && (<h2 className="bookshelf-title">{titleShelf}</h2>)}
            <div className="bookshelf-books">
                <BooksList
                  books={books}
                  onChangeShelf={onChangeShelf} />
            </div>
        </div>
  );
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  titleShelf: PropTypes.string,
  onChangeShelf: PropTypes.func.isRequired
};

export default BookShelf;
