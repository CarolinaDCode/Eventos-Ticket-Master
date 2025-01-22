import { useState } from 'react';
import Navbar from './components/Navbar/index';
import Events from './components/Events/index';
// import SignupForm from './components/SignupForm';
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
      {/* <SignupForm /> */}
    </>
  )
}

export default App
