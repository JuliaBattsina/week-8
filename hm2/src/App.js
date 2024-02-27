import {useState} from "react";
import './App.css';

function App() {
  const [book, setBook] = useState ({
    title: "Gone with the wind",
    author: "Margaret Mitchell",
    year: 1936,
    rating: "5 stars"
  })
  const changeYear = () => {
    setBook ({... book, year : 1937})
  }
  return (
    <div className="App">
    <h2>{book.title}</h2>
    <h2>{book.author}</h2>
    <h2>{book.year}</h2>
    <h2>{book.rating}</h2>
    <button onClick={changeYear}>Click Here</button>
    </div>
  );
}

export default App;
