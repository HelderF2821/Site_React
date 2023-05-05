import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Composants/Header';
import React, { useState } from 'react';
import TimeLine from './Pages/TimeLine';

function App() {
  const [menuOpen, setMenuOpen] = useState('');

  const childToParent = (menuClass) => {
    setMenuOpen(menuClass);
  };
  
  return (
    <>
      <Header childToParent={childToParent} />
      <div className={'App' + (menuOpen ? ' reduced' : '')}>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/TimeLine' element={<TimeLine/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
