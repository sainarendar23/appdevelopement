import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/login';
import Signup from './components/signup';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Homepage from './components/Homepage';

function App(){
    return(
      <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/Main' element={<Main/>}/>
        <Route path='/Homepage' element={<Homepage/>}>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
}
export default App;

