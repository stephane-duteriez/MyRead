import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger.js';

function Book (props) {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 130, height: 190, backgroundImage: `url("${props.image}")` }} alt={'cover of ' + props.title}></div>
        <BookShelfChanger active={props.shelf} onChangeShelf={props.onChangeShelf}/>
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.authors}</div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.string,
  shelf: PropTypes.string,
  image: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default Book;
