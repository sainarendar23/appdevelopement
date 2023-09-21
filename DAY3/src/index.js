import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/login';
import Signup from './components/signup';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/App' element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
