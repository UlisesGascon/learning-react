import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import chuckPic from './chuck_norris.png';
import './App.css';

WebFont.load({
  google: {
    families: ['Acme:400', 'sans-serif']
  }
});
function App() {
  const [quote, setQuote] = useState()

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => {
        console.log("Data is here", data)
        setQuote(data.value)
      })
      .catch(err => {
        console.warn(err)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {!quote ? (
        <h1>Loading....</h1>
        ) : (
        <React.Fragment>
          <img src={chuckPic} className="App-pic" alt="logo" />
          <p>
          {quote}
          </p>
          <a
            className="App-link"
            href="https://chucknorris.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quote by chucknorris.io
          </a>
        </React.Fragment>
        )}

      </header>
    </div>
  );
}

export default App;
