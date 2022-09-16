import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import LoginComponent from './components/LoginComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/table" element={<LoginComponent/>} />
            
            
            

          </Routes>
        </div>
        <FooterComponent />
      </Router>


    </div>

  );
} export default App;