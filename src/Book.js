import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger.js';

function Book(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: props.image.width, height: props.image.height, backgroundImage: props.image.url}}></div>
        <BookShelfChanger active={props.shelf}/>
      </div>
      <div className="book-title">{props.tile}</div>
      <div className="book-authors">{props.author}</div>
    </div>
  )
};

Book.propTypes = {
  title : PropTypes.string.isRequired,
  author : PropTypes.string.isRequired,
  shelf : PropTypes.string,
  image : PropTypes.object.isRequired
};

export default Book;