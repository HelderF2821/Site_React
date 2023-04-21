import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Composants/Header';
import React, { useState } from 'react';

function App() {
  const [menuOpen, setmenuOpen] = useState('');

  const childToParent = (menuclass) => {
    setmenuOpen(menuclass);
  };

  return (
    <>
      <Header childToParent={childToParent} />
      <div className={'App' + (menuOpen ? ' reduced' : '')}>
        {/* <Routes>
          <Route path='/home' element={<Home/>}/>
        </Routes> */}
        <Home />    
      </div>
    </>
  );
}

export default App;
