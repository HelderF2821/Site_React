import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Composants/Header';

function App() {

  return (
    <>
      <Header />
      <div class="App">
        {/* <Routes>
          <Route path='/home' element={<Home/>}/>
        </Routes> */}
        <Home />    
      </div>
    </>
  );
}

export default App;
