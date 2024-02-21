import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer'; // corrected typo in import statement
import Login from './components/Login';
import Doglist from './components/Doglist';
import Dogdetails from './components/Dogdetails';
import Dograting from './components/Dograting';
import Superwaglist from './components/Superwaglist';
import Sharelink from './components/Sharelink';
import "./App.css";



function App() {
  return (
    <Router>
      <div className='App'>
      <Navbar />
      </div>
      <div className="main-content">
      <Routes>
        <Route path="/" element={<Doglist />} />
       <Route path="/login" element={<Login />} />
        <Route path="/dogs/:id" element={<Dogdetails />} />
        <Route path="/rate" element={<Dograting />} />
        <Route path="/superwag" element={<Superwaglist />} />
        <Route path="/share/:id" element={<Sharelink />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
