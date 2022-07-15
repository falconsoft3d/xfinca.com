import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Dasboard from './components/Dasboard';
import PrivateRoute from './components/PrivateRoute';
import {AuthProvider} from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/Dashboard" element={
                    // <PrivateRoute>
                      <Dasboard/>
                    // </PrivateRoute>
                    }/>
              <Route path="/" element={<App/>}/> 
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </>
);
