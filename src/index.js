import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dasboard from './components/Dasboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/Dashboard" element={<Dasboard/>}/>
            <Route path="/" element={<App/>}/> 
      </Routes>
    </BrowserRouter>
  </>
);
