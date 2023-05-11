import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer.js'
import ErrorPage from './nav-pages/404page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './nav-pages/Category.js';
import Home from './nav-pages/Home.js';
import About from './nav-pages/About';
import Profile from './nav-pages/Admin'
import Create from './components/Modal'
import SignUp from "./nav-pages/SignUp"
import Contacts from "./nav-pages/Contacts"
import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); 
  }, []);
  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader book">
          <figure className="page"></figure>
          <figure className="page"></figure>
          <figure className="page"></figure>
        </div>
        <h4>Loading...</h4>
      </div>
    );
  }
  return (
    <div>

      <Routes>
        <Route path="/" element={<div><Header /><Home /><Footer /></div>} />
        <Route path="/category/:id" element={<div><Header /><Category /><Footer /></div>} />
        <Route path="/Profile/:id" element={<div><Header /><Profile /><Footer /></div>} />
        <Route path="/create" element={<div><Header /><Create /><Footer /></div>} />
        <Route path="/about" element={<div><Header /><About /><Footer /></div>} />
        <Route path="/contacts" element={<div><Header /><Contacts /><Footer /></div>} />
        <Route path="/signUp" element={<div><Header /><SignUp /><Footer /></div>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </div>
  )
}

export default App;