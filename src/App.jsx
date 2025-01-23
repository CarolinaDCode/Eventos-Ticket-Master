import { useState, useRef } from 'react';
import Navbar from './components/Navbar/index';
import Events from './components/Events/index';
// import SignupForm from './components/SignupForm';
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef();
  // const [count, setCount] = useState(0);


  const handleNavbarSearch = (term) => {
    console.log(containerRef.current.setSearch(''));
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Events searchValue = {searchTerm}/>
      {/* <SignupForm /> */}
    </>
  )
}

export default App
