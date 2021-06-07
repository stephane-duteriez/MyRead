import React, {useState} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

// import * as BooksAPI from './BooksAPI'
import './App.css';
import Library from './Library';
import {shelfs} from './Constantes';
import SearchBook from './SearchBook';

const initBooks = [
  {
    id : uuidv4(),
    title : "To Kill a Mockingbird",
    autor : "Harper Lee",
    image : {
      width : 128,
      height : 193,
      url :  'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
    },
    shelf : shelfs.currentlyReading
  },
  {
    id : uuidv4(),
    title : "Ender's Game",
    autor : "Orson Scott Card",
    image : {
      width : 128,
      height : 193,
      url :  'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
    },
    shelf : shelfs.currentlyReading
  },
  {
    id : uuidv4(),
    title : "1776",
    autor : "David McCullough",
    image : {
      width : 128,
      height : 193,
      url : 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")'
    },
    shelf : shelfs.wantToRead
  },
  {
    id : uuidv4(),
    title : "Harry Potter and the Sorcerer's Stone",
    autor : "J.K. Rowling",
    image : {
      width : 128,
      height : 193,
      url : 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")'
    },
    shelf : shelfs.wantToRead
  },
  {
    id : uuidv4(),
    title : "The Hobbit",
    autor : "J.R.R. Tolkien",
    image : {
      width : 128,
      height : 192,
      url :  'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")'
    },
    shelf : shelfs.read
  },
  {
    id : uuidv4(),
    title : "Oh, the Places You'll Go!",
    autor : "Seuss",
    image : {
      width : 128,
      height : 174,
      url : 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")'
    },
    shelf : shelfs.read
  },
  {
    id : uuidv4(),
    title : "The Adventures of Tom Sawyer",
    autor : "Mark Twain",
    image : {
      width : 128,
      height : 192,
      url : 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")'
    },
    shelf : shelfs.read
  }
];

function BooksApp() {

  const [books, setBooks] = useState(initBooks);

  function modifyBook(newBook) {
    setBooks([...books.filter((book)=>(book.id !== newBook.id)), newBook]);
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
