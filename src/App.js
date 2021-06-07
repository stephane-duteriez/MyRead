import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import './App.css';
import Library from './Library';
import SearchBook from './SearchBook';


function BooksApp() {

  const [books, setBooks] = useState([]);
  const getAllBook = true;

  useEffect(() => {
    BooksAPI.getAll().then((books)=>{
      setBooks(books);
    })
  }, [getAllBook]);

  function modifyBook(bookToUpdate, shelf) {
    BooksAPI.update(bookToUpdate, shelf).then(()=>{
      setBooks([...books.filter((book)=>(book.id !== bookToUpdate.id)), {...bookToUpdate, shelf: shelf}]);
    });
    
  };

  return (
    <Router>
    <div className="app">
      <Route path="/search">
        <SearchBook />
      </Route>
      <Route exact path="/">
        <Library books={books} modifyBook={modifyBook} />
      </Route>
    </div>
    </Router>
    
  )
}

export default BooksApp
