import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './templates/Dark.css';
import './App.css';
import HomePage from './views/HomePage';
import Login from './views/Login';
import Register from './views/Register';

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/*" element={<HomePage/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
