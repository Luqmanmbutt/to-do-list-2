import React, { useState }  from 'react';
import './App.css';



/**
 * useState Explained..
 * 
 *  The useState hook is a React hook that allows you to add a state to a functional component. The state is data that changes over time, and it is used to keep track of the current state of your component. The useState hook returns an array with two values: the current state value and a function to update it.
 * 
 */




function App() {

// const [value, setValue] = useState([])
// const [itemValue, setItemValue] = useState("")
// console.log("working" , typeof itemValue)

const [count, setCount] = useState(0)

const handleClick = () => {
  setCount(count + 1);
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
             <button onClick={handleClick}> Count : {count} </button>
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