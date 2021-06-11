import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger.js';

function Book (props) {
  const {title, authors, shelf, image, onChangeShelf} = props;
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 130, height: 190, backgroundImage:image?`url("${image}")`:'' }} alt={'cover of ' + title}></div>
        <BookShelfChanger active={shelf} onChangeShelf={onChangeShelf}/>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.string,
  shelf: PropTypes.string,
  image: PropTypes.string,
  onChangeShelf: PropTypes.func.isRequired
};

export default Book;
