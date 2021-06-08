import React from 'react';
import PropTypes from 'prop-types';
import { shelfs, labelShelfs } from './Constantes';

function BookShelfChanger (props) {
  return (
        <div className="book-shelf-changer">
            <select
             onChange={(evt) => {
               props.onChangeShelf(evt.target.value);
             }}
                value={props.active || shelfs.none}>
                <option value="move" disabled>Move to...</option>
                {Object.keys(shelfs).map((shelf) => (
                    <option key={shelf}
                        value={shelf} >{labelShelfs[shelf]}</option>
                ))}
            </select>
        </div>
  );
};

BookShelfChanger.defaultProp = {
  shelf: shelfs.none
};

BookShelfChanger.propTypes = {
  active: PropTypes.string,
  onChangeShelf: PropTypes.func.isRequired
};

export default BookShelfChanger;
