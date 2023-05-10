import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer.js'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './nav-pages/Category.js';
import Home from './nav-pages/Home.js';
import About from './nav-pages/About';
import Profile from './nav-pages/Admin'
import Create from './components/Modal'
import SignUp from "./nav-pages/SignUp"
import Contacts from "./nav-pages/Contacts"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/Profile/:tab" element={<Profile />} />
        <Route path="/Profile/:create" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
