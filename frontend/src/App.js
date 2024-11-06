import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

import Error from './Pages/Error';
import AboutUs from './Pages/AboutUs';
import CustomNavbar from './Components/Navbar';
import ContactUs from './Pages/ContactUS';
import Home from './Pages/Home';


function App() {
  return (
    <BrowserRouter>
    <CustomNavbar/>
    <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<AboutUs />} /> 
            <Route path="/contact" element={<ContactUs />} />  
            <Route path="*" element={<Error />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
