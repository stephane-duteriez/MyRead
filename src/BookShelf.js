import React from 'react';
import PropTypes from 'prop-types';
import BooksList from './BooksList.js';

function BookShelf(props) {
    return (
        <div className="bookshelf">
            {props.titleShelf && (<h2 className="bookshelf-title">{props.titleShelf}</h2>)}
            <div className="bookshelf-books">
                <BooksList
                  books={props.books}
                  onChangeShelf={props.onChangeShelf} />
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    books : PropTypes.array.isRequired,
    titleShelf : PropTypes.string,
    onChangeShelf : PropTypes.func.isRequired
}

export default BookShelf;
