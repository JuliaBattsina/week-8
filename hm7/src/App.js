import './App.css';
import { useEffect, useState } from 'react';
import image from "./foto.jpg";


function App() {

const [tips, setTips] = useState("");

useEffect(() => {
fetchTips();
}, [])

const fetchTips = async () => {
const response = await fetch(`http://www.boredapi.com/api/activity/`);
const data = await response.json();
console.log(data.activity);
setTips(data.activity)
}



return (
  <div className ="App">


<img src={image} alt='foto'/>
 
<h1>Get a tip of the day</h1>

  



<p> {tips} </p>
<div class="container">
    <div class="center">
      <button class="btn" onClick={fetchTips}>
        
        <span>New Tip</span>
      </button>
    </div>
  </div>



</div>

);

}
export default App;