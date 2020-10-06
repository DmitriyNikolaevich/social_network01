import React from 'react';
import logo from './logo.svg';
import './App.css';
import BackPhoto from './Components/BackPhoto/BackPhoto';
import MainPhoto from './Components/MainPhoto/MainPhoto';
import Navbar from './Components/Navbar/Navbar';
import NameSocial from './Components/NameSocial/NameSocial';
import About from './Components/Content/About/About';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Photos from './Components/Content/Photos/Photos';
import Friends from './Components/Content/Friends/Friends';
import More from './Components/Content/More/More';

function App() {
  return (
    <BrowserRouter>
      <div className="App-wraper">
        <BackPhoto />
        <MainPhoto />
        <Navbar />
        <NameSocial />
        <div className='content'>
          <Route render={ () => (<About />)} path='/about' />
          <Route render={ () => (<Photos />)} path='/photos' />
          <Route render={ () => (<Friends />)} path='/friends' />
          <Route render={ () => (<More />)} path='/more' />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
