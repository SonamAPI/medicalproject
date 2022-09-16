import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './components/ContactUs';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/table" element={<ContactUs />} />
            <Route path="/table" element={<FooterComponent />} />
            <Route path="/table" element={<Login />} />
            <Route path="/table" element={<ContactUs />} />
            <Route path="/table" element={<ContactUs />} />

          </Routes>
        </div>
        <FooterComponent />
      </Router>


    </div>

  );
} export default App;