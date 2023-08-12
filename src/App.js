import React from 'react';
import './App.css';

function App() {

  const name = 'Matheus'

  const newName = name.toUpperCase()

  function sum(a,b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App"> 
      <h2>Alterando o JSX</h2>
      
      {/* <p>Ola, {name}</p>  */}

      <p>Ola, {newName}</p>
      
      {/* <p>Soma: {2 + 2}</p> */}
      
      <p>Soma: {sum(2, 2)}</p>
      <img src={url} alt="My image1" />
    </div>
  )
}

export default App;
