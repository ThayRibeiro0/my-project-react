import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import Phase from './components/Phase';

function App() {
  const name = "Maria"
  // const name = 'Matheus'
  // const newName = name.toUpperCase()
  // function sum(a,b){
  //   return a + b
  // }
  // const url = 'https://via.placeholder.com/150'

  return (
    <div className="App"> 

      <h1>Testando CSS</h1>
      <Phase/>
      <Phase/>
      
      {/* <h2>Editing the JSX</h2>
      <p>Hi, {name}</p> 
      <p>Hi, {newName}</p>
      <p>Sum: {2 + 2}</p>
      <p>Sum: {sum(2, 2)}</p>
      <img src={url} alt="My image1" /> */}

      {/* <HelloWorld /> */}
      
      <SayMyName name="Matheus"/>
      <SayMyName name="Joao"/>
      <SayMyName name={name} />
      <Person 
        name="Rodrigo" 
        age="28" 
        work="programmer" 
        photo="https://via.placeholder.com/150" 
        />
    </div>
  )
}

export default App;
