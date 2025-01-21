import { useState } from 'react';
import Navbar from './components/Navbar/index';
import Events from './components/Events/index';
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0);

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch}/>
      <Events searchValue = {searchTerm}/>
    </>
  )
}

export default App
