import React from 'react';
import PropTypes from 'prop-types';
import {shelfs} from './Constantes';

function BookShelfChanger(props) {
    console.log(props.active);
    return (
        <div className="book-shelf-changer">
            <select value={props.active || shelfs.none} onChange={(evt)=>{
                props.onChangeShelf(evt.target.value)}}>
                <option value="move" disabled>Move to...</option>
                <option value={shelfs.currentlyReading}>Currently Reading</option>
                <option value={shelfs.wantToRead}>Want to Read</option>
                <option value={shelfs.read}>Read</option>
                <option value={shelfs.none}>None</option>
            </select>
        </div>
    )
};

BookShelfChanger.defaultProp = {
    shelf : shelfs.none
}

BookShelfChanger.propTypes = {
    active : PropTypes.number,
    onChangeShelf : PropTypes.func.isRequired
}

export default BookShelfChanger;