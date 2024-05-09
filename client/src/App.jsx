import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Home from './components/Home';
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;