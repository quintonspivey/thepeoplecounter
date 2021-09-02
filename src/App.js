import './App.css';
import React, {useState} from 'react';
function App() {

  const [ count, setCount] = useState(0);
  function addFunction(){
    setCount(count + 1);
  }
  function deleteFunction(){
    setCount(count -1);
  }
  return (
    <div className="App">
      
        <h1>The People Counter</h1>
        <h2 className= "count"> {count} </h2>
        
    
    <div className='button'>
      <button onClick = {addFunction}>
        Add
      </button>
    </div>
    <div className='button'>
      <button onClick = {deleteFunction}>
        Delete
      </button>
    </div>
    </div>
  );
}

export default App;
