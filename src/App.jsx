import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container id='quote-box'>
        <div id="text">
        <i class="fa fa-quote-left" />
        <span>Olaa</span>
        <i class="fa fa-quote-right" />
        </div>
        <div id="author"></div>
        <button id="new-quote">Random Quote</button>
        <a href="twitter.com/intent/tweet" title='Tweet the quote!' id="tweet-quote"><i class="fa-brands fa-square-twitter" /></a>
      </Container>
    </div>
  );
}

export default App;
