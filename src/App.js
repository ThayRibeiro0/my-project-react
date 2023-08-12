import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'Matheus'
  const newName = name.toUpperCase()
  function sum(a,b){
    return a + b
  }
  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App"> 
      <h2>Editing the JSX</h2>
      <p>Hi, {name}</p> 
      <p>Hi, {newName}</p>
      <p>Sum: {2 + 2}</p>
      <p>Sum: {sum(2, 2)}</p>
      <img src={url} alt="My image1" />
      <HelloWorld />
    </div>
  )
}

export default App;
