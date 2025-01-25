import React, { useState } from 'react'

import './App.css'

// EASY: Create a simple counter app using React hooks. Implement the buttons to Increment and Decrement in the counter value 



function App() {
  const [counter, setCounter] = useState(0)

  function decrementCount(){
    setCounter(prevCounter => prevCounter -1)
  }
  function incrementCount(){
    setCounter(prevCounter => prevCounter + 1)
  }
  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{counter}</span>
    <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App

// hooks cannot be used inside of class components, only function components.
// must be at top level of yuour function!!!!
// update state function has access to prevState variable whichh holds the previous state. usually used to update state with a function passsed as arguments.