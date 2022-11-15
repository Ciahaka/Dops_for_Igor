import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from './components/button/Button';

function App() {

  const [showJson,setShowJson] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setShowJson(json))
  }, [])

  const showMeJson  = ()=>{
    console.log(showJson)
  }

  return (
    <div className="App">
      <Button name={'KliK'} callback={showMeJson}/>
    </div>
  );
}

export default App;
