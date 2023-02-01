const App = () => {

    const [quote, setQuote] = React.useState('');
    const [color, setColor] = React.useState('');
    
    const reload = () => {
        const getQuote = () => {
            fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then(data => {
                let randomNumber = Math.floor(Math.random() * data.length);
                setQuote(data[randomNumber]);   
            })
        };
    
        const getColor = () => {
            const colors = [
                "#16a085", 
                "#27ae60", 
                "#2c3e50", 
                "#f39c12", 
                "#e74c3c",
                "#9b59b6",
                "#fb6a4a",
                "#342224",
                "#472e32",
                "#bdbb99",
                "#77b1a9",
                "#73a857",
            ];
    
            let randomNumber = Math.floor(Math.random() * colors.length);
            setColor(colors[randomNumber]);
        };   
        
        getQuote();
        getColor();
    };

    React.useEffect(() => {
        reload();
    },[]);
  

    return(
        <div style={{backgroundColor: color, minHeight: "100vh"}}>
            <div id="quote-box" className="card" style={{width: "600px", margin: "0 auto"}}>
                <div className="card-body">
                    {/* Quote and Author */}
                    <div id="text" className="card-text" >
                        <i className="fa fa-quote-left" />
                        {quote.text}
                        <i className="fa fa-quote-right" />
                    </div>
                    <div id="author" className="card-title">
                        <h5>{quote.author}</h5>
                    </div>

                    {/* Buttons and links */}
                    <button id="new-quote" className="btn btn-primary" onClick={reload}>Random Quote</button>
                    <a href={`https://www.twitter.com/intent/tweet?text=${quote.text}`} target="_blank" id="tweet-quote"><i className="fa-brands fa-square-twitter" /></a>

                </div>
            </div>
        </div>
    );  
}

ReactDOM.render(<App />, document.getElementById('root'));