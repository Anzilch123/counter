import {useState} from 'react'
import './App.css';

function App() {
  const[counter,setCounter]=useState(0)
  //counter state - to hold values

  function incrementCounter(){
    setCounter(counter+1);
  }
  
  function decrementCounter(){
    if(counter!==0){
    setCounter(counter-1);
  }
}
  function reset(){
     setCounter(0)
  }
  return (
<div
style={
  {
    display:'flex',
    flexdirection:'column',
    alignItems:'center',
    justifyContent:'center',
    border:'5px solid ',
    backgroundColor:'lightGreen',
    borderRadius:'20px',
    width:'35%',
    height:'200px',
    padding:'10px',
    marginLeft:'390px',
    marginTop: '150px'
  }
}
className="App">
      <header className="App-header">
        <h1>Counter Application</h1>
        <h2
        style={{
          border:'solid  yellow  ',
          borderRadius:'20px',
          textAlign:'center',
          backgroundColor:'black',
          color:'yellow'
        }}
        >{counter}</h2>
        <button 
        style={
          {
            backgroundColor: "blue",
            color: 'black',
            padding:'10px',
            borderRadius:'30px'

          }
        }
        onClick={incrementCounter}>ADD</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button 
        style={
          {
            backgroundColor: "red",
            color: 'black',
            padding:'10px',
            borderRadius:'30px'


          }
        }
        onClick={decrementCounter}>REDUCE</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button 
        style={
          {
            backgroundColor: "green",
            color: 'black',
            padding:'10px',
            borderRadius:'30px'


          }
        }
        onClick={reset}>RESET</button>          
      </header>
    </div>
  );
}

export default App;
