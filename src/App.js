import React from 'react';
import logo from './logo.svg';
import './App.css';
import BackPhoto from './Components/BackPhoto/BackPhoto';
import MainPhoto from './Components/MainPhoto/MainPhoto';
import Navbar from './Components/Navbar/Navbar';
import NameSocial from './Components/NameSocial/NameSocial';
import About from './Components/Content/About/About';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App-wraper">
        <BackPhoto />
        <MainPhoto />
        <Navbar />
        <NameSocial />
        <div className='content'>
          <Route component='About' path='/About' />
          <Route component='Photos' path='/Photos' />
          <Route component='Friends' path='/Friends' />
          <Route component='More' path='/More' />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
