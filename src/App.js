import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './components/Result';

const orginalnum = Math.floor(Math.random()*10)+1;

function App() {
  
  const [term,setTerm] = useState("");
  const handler = (e) =>{
    setTerm(e.target.value)
  }
  return (

    <div className="container">
      <div className='head'>
          <label htmlFor='term'>" Guess Number between 1 - 10 " -- GOOD LUCK!! </label>
      </div>
      <input id = 'term' type ='text' name = 'term' onChange={handler}/>
      <Result orginalnum = {orginalnum} term = {term}/>
    </div>

  );
}

export default App;
