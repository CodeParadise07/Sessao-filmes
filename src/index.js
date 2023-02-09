import React from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import Lists from './pages/Lists';
import Favorits from './pages/Favorits';
import Login from './pages/Login';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/pages/lists" element={<Lists />} />
      <Route path="/pages/favorits" element={<Favorits />} />
      <Route path="/pages/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

