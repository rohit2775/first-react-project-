import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import './App.css'

function App() {
  const [length , setlength] = useState(8)
  const [numberallowed , setnumberallowed] = useState(false)
  const [charallowed , setcharallowed] = useState(false)
  const [pass , setpass] = useState("") 

  
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback( ()=>{

   let password = ""
   let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   
   if(numberallowed)str+= "0123456789"
   if(charallowed)str+= ":;></+@#$%&*"
 
  for(let i = 1; i<=length ; i++){
    let char = Math.floor( Math.random()*str.length + 1)
   password+= str.charAt(char)

  }
  setpass(password)

  } , [length, numberallowed, charallowed, setpass])


 const copypassword = useCallback(()=>{
  passwordRef.current?.select()
   window.navigator.clipboard.writeText(pass)
 },[pass])


  useEffect(()=>{
     
  passwordGenerator()

  },[length,  numberallowed, charallowed , passwordGenerator])





  return (
  <>
  <div className="w-full max-w-5xl mx-auto shadow-md rounded-2xl px-8 py-10 my-8 bg-gray-800">

    <h1 className="text-white text-center text-3xl font-medium mb-8">
      Password generator
    </h1>

    <div className="flex shadow rounded-xl overflow-hidden mb-4">
      <input
        type="text"
        value={pass}
        className="outline-none w-full py-4 px-6 bg-white text-black text-2xl"
        placeholder="Password"
        readOnly
        ref={passwordRef}
      />
      <button 
      onClick={copypassword} 
      className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0' > copy</button>

    </div>

    <div className='flex text-sm gap-x-8'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={8}
      max={20}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setlength(e.target.value)}}
      />
      <label className='text-white text-2xl'> Length : {length}</label>
    </div>
    <div className='flex items-center gap-x-1' >
      <input
       type="checkbox" 
       defaultChecked={numberallowed}
       id='numberInput'
       onChange={()=>{
        setnumberallowed((prev)=> !prev)
       }}
       />
       <label className='text-white text-2xl ' htmlFor='numberInput'> numbers</label>
    </div>
   
     <div className='flex items-center gap-x-1' >
      <input
       type="checkbox" 
       defaultChecked={charallowed}
       id='chracterInput'
       onChange={()=>{
        setcharallowed((prev)=> !prev)
       }}
       />
       <label className='text-white text-2xl ' htmlFor='characterInput'> characters</label>
    </div>

    </div>

  </div>
</>
  )
}

export default App
