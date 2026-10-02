import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {


  let count = 3 

 const addValue = ()=>{
  console.log('clicked', count);
  count +=1
 }
  return (
    <>
    <h1>  hello rohit bhai </h1>
    <h2> counter value : {count} </h2>
   
   <button
    onClick={addValue}
   > add value </button>
   <br>
   
   </br>
   <button> add value </button>
    </>
  )
}

export default App
