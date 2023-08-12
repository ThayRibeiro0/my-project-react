import React from 'react';
import './App.css';
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import Phase from './components/Phase';

// import all the components to use it, for works the app, all them need to be here

function App() {
  // const especific to change name
  const name = "Maria"

  return (
    <div className="App"> 

      <h1>Testando CSS</h1>
      {/* bring the component here also to work especific the atribute in front with the name or create other component with the data and import here and he'll show what have inside there.  */}
      <Phase/>
      <Phase/>
      <SayMyName name="Matheus"/>
      <SayMyName name="Joao"/>
      <SayMyName name={name} />

      {/* and here you also can especific more datas */}
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


// IMPORT IN THE TOP
//import HelloWorld from './components/HelloWorld';

  // this go inside the FUNCTION
  // const name = 'Matheus'
  // const newName = name.toUpperCase()
  // function sum(a,b){
  //   return a + b
  // }
  // const url = 'https://via.placeholder.com/150'


  // this go inside of the DIV
  // <h2>Editing the JSX</h2>
  // <p>Hi, {name}</p> 
  // <p>Hi, {newName}</p>
  // <p>Sum: {2 + 2}</p>
  // <p>Sum: {sum(2, 2)}</p>
  //<img src={url} alt="My image1" />
  // <HelloWorld /> 
      