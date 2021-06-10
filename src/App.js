import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import './App.css';
import Library from './Library';
import SearchBook from './SearchBook';
import PageNotFound from './PageNotFound';

function BooksApp () {
  const [books, setBooks] = useState([]);
  const getAllBook = true;

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, [getAllBook]);

  function modifyBook (bookToUpdate, shelf) {
    BooksAPI.update(bookToUpdate, shelf).then(() => {
      setBooks([...books.filter((book) => (book.id !== bookToUpdate.id)), { ...bookToUpdate, shelf: shelf }]);
    });
  }

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route exact path="/search">
          <SearchBook currentBooks={books} onChangeShelf={modifyBook}/>
        </Route>
        <Route exact path="/">
          <Library books={books} modifyBook={modifyBook} />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </div>
    </Router>

  );
}

export default BooksApp;
