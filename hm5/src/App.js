
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [quote, setQuote] = useState ("");
  useEffect (() => {
    const getQuote = async () => {
      const response = await fetch ('https://api.quotable.io/random ');
      const data = await response.json ();
      setQuote (data.content)
    }
    getQuote ()
  }, [])
  return (
    <div className="App">
  <p>{quote}</p>
    </div>
  );
}

export default App;
