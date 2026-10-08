import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import "tailwindcss";
import Card5 from './components/card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Card5/>
    </>
  )
}

export default App
