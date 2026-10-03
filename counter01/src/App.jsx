import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

    const [count , setCount] = useState(3)
   
  

 const addValue = ()=>{
  
  if (count <=19 ){
     setCount(count+1)
  console.log('clicked', count);
  }
  else{
     
    alert("cannot add more value ")

  }
 }
  
 const removeValue =()=>{

  if (count > 0){
 setCount(count-1)
    console.log('clicked', count);

  }
  else{
    alert('removeable value reached ')
  }

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
   <button
   onClick={removeValue}
   > remove value </button>
    </>
  )
}

export default App
