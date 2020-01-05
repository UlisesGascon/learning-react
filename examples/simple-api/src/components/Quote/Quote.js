import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import chuckPic from '../../chuck_norris.png';
import './Quote.css';

WebFont.load({
  google: {
    families: ['Acme:400', 'sans-serif']
  }
});

function Quote() {
  const [quote, setQuote] = useState()
  const [err, setErr] = useState()

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => {
        setQuote(data.value)
      })
      .catch(error => {
        console.warn(error)
        setErr(error)
      })
  }, [])

  if(err) {
    return (
      <React.Fragment>
        <h1 className="error">Critical Error <span role="img" aria-label="Exclamation Mark">❗️</span></h1>
        <h3>Please Reload</h3>
      </React.Fragment>
    )
  }

  if(!quote){
    return <h1>Loading....</h1>
  }

  return (
    <React.Fragment>
      <img src={chuckPic} className="Quote-pic" alt="logo" />
      <p>
      {quote}
      </p>
      <a
        className="Quote-link"
        href="https://chucknorris.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Quote by chucknorris.io
      </a>
    </React.Fragment>
  )
}

export default Quote