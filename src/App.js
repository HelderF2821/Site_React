import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Composants/Header';
import React, { useState } from 'react';
import Timeline from './Pages/Timeline';

function App() {
  const [menuOpen, setMenuOpen] = useState('');

  const childToParent = (menuClass) => {
    setMenuOpen(menuClass);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };  
  
  return (
    <>
      <Header childToParent={childToParent} closeMenu={closeMenu} />
      <div className={'App' + (menuOpen ? ' reduced' : '')}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Timeline' element={<Timeline/>}/>
        </Routes>
      </div>
    </>
  );
}


export default App;
