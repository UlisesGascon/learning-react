import React from 'react';
import WebFont from 'webfontloader';
import chuckPic from './chuck_norris.png';
import './App.css';


WebFont.load({
  google: {
    families: ['Acme:400', 'sans-serif']
  }
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={chuckPic} className="App-pic" alt="logo" />
        <p>
        Chuck Norris can make you cry with his unbelievable armpit rendition of 'The Star Spangled Banner'.
        </p>
        <a
          className="App-link"
          href="https://chucknorris.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quote by chucknorris.io
        </a>
      </header>
    </div>
  );
}

export default App;
