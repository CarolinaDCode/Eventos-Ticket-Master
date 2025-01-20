import { useState } from 'react';
import Navbar from './components/Navbar/index';
import Events from './components/Events/index';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Events />
    </>
  )
}

export default App
