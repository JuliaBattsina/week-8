import {useState} from "react";
import './App.css';

function App() {
  const [title, setTitle] = useState ("100 $ startup");
  const [year, setYear] = useState (2010);
  const [rating, setRating] = useState ("5 stars");

  const changeRating = () => {
    setRating ("10 stars")
  }
  return (
    <div className="App">
   <p>{title}</p>
   <p>{year}</p>
   <p>{rating}</p>
   <button onClick={changeRating}>Click Here</button>
    </div>
  );
}

export default App;
