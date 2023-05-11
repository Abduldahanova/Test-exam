import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './nav-pages/404page';
import Header from './components/Header';
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './nav-pages/Category.js';
import Home from './nav-pages/Home.js';
import About from './nav-pages/About';
import Profile from './nav-pages/Admin'
import Create from './components/tables/Modal'
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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Profile/:tab" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;