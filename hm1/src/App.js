import "./App.css";
import {useState} from "react";

function App() {
  const [book, setBook] = useState ({
    title: "$100 Startup",
    author: "Chris Guillebeaut",
    year: 2010,
    rating: "3 stars",
  
  })
  const changeRating = () => {
    setBook ({...book,rating:"5 stars"})
  }
  return (
    <div className="App">
      <h2>{book.title}</h2>
      <h2>{book.author}</h2>
      <h2>{book.year}</h2>
      <h2>{book.rating}</h2>
      <button onClick={changeRating}> Click Here </button>
    </div>
  );
}

export default App;
