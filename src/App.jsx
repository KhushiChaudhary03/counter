import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter=5
  const addValue = ()=>{
    console.log("clicked", counter);
    counter = counter+1;
  }

  return (
    <>
    <h1>Chai aor react</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Increase Value {counter}</button>
    <br />
    <button>Decrease Value{counter}</button>
    <p>
    footer {counter}
    </p>
    </>
  )
}

export default App
