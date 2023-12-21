import React from 'react';
import './App.css';

function App() {
  return (
    <div className='main-container'>
      <div className='first-container'> 
        <div className='to-do-list-title'>
          TO-DO-LIST
        </div>
        <div className='second-container'>
          
          <div className='add-to-list-container'>
             
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


/**
 * Two things a function can do 
 * 1 - Does not return anything but, Executes lines that are inside the function 
 * 2 - Returns something for us to use 
 */
const randomFunction = () => {

console.log("randomFunction -- works")

}

randomFunction()