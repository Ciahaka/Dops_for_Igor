import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from './components/button/Button';

type ShowPropsType = {
  completed: boolean
  id: number
  title: string
  userId: number
}

function App() {
  const [showJson, setShowJson] = useState<ShowPropsType[]>([])


  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(json => setShowJson(json))
  // }, [])

  const useShowMeJson = () => {
    // useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setShowJson(json))
    // }, [])
  }

  const rebirthPage = () =>{
    setShowJson([])
  };

  return (
    <div className="App">

      <Button name={'KliK'} callback={useShowMeJson}/>
      <Button name={'RebirtH'} callback={rebirthPage}/>

      <ul>
        {showJson.map(el => {
          return (
            <li key={el.id}>
              <span>{`${el.id} ${el.title} ${el.userId} ${el.completed} `}</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
