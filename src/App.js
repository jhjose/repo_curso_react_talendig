import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './templates/Dark.css';
import './App.css';
import HomePage from './views/HomePage';
import Login from './views/Login';
import Register from './views/Register';
import Counter from './components/Counter';
import Chronometer from './components/Chronometer';

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/*" element={<HomePage/>} />
              <Route path="/login" exact element={<Login/>} />
              <Route path="/register" element={<Register />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/chronometer" element={<Chronometer/>} />
              <Route path="*" element={<Error404 />} />
          </Routes>
      </BrowserRouter>
  );
}

function Error404(){
    return (
        <div><p>Página no encontrada</p></div>
    );
}

export default App;
