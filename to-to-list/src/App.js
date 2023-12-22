import React, { useState }  from 'react';
import './App.css';



function App() {

const AddToList = () => {

const [inputValue, setInputValue] = useState('');



const handleInputChange = (event) => {
  setInputValue(event.target.value)

  
}
console.log("its working", handleInputChange())


}







  return (
    <div className='main-container'>
      <div className='first-container'> 
        <div className='to-do-list-title'>
          TO-DO-LIST
        </div>
        <div className='second-container'>
          
          <div className='add-to-list-container'>
             <input></input>
             <button> click me </button>
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
// const randomFunction = () => {

  // const anotherFunction = () => {
  //   // console.log("anotherfunction  -- works")
    
  //   return 2
  // }

// }

// randomFunction.anotherFunction()
// randomFunction()