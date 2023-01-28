import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, {useState, useEffect} from 'react';

function App() {

  const [quote, setQuote] = useState('');

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
      let randomNumber = Math.floor(Math.random() * data.length);
      setQuote(data[randomNumber]);
    });
  };

  useEffect(() => {
    getQuote();
  },[]);
  return (
    <div className="App">
      <div id='quote-box'>
      <Card>
          <Card.Body>
            <Card.Title id="quote">
              <i className='fa fa-quote-left'/>
              {quote.text}
              <i className='fa fa-quote-right'/>
            </Card.Title>
            <Card.Text id="author" className="card-text">{quote.author}</Card.Text> 
            <Button onClick={getQuote} variant="primary" id="new-quote" style={{"margin-right": "40px"}}>Random Quote</Button>
            <a href={`https://www.twitter.com/intent/tweet?text=${quote.text}`} title='Tweet the quote!' target="_blank" id="tweet-quote"><i class="fa-brands fa-square-twitter" /></a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
