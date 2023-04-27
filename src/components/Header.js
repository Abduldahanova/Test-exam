import './style.css';

import React from 'react';
import { Navbar, Nav, Container, FormControl, Form, Button } from 'react-bootstrap'
import logo from './logo192.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Price from '../pages/Price'
import Contacts from '../pages/Contacts'
import SignUp from '../pages/SignUp'




const Header = () => {
        return (
            <div>
            <Navbar collapseOnSelect expand="md" bg='dark' variant="dark">
                <Container id='bar'>
                    <Navbar.Brand href="/">
                        <img 
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="Logo" 
                        />   JenJen
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/contacts">Contact Us</Nav.Link>
                            <Nav.Link href="/signUp">Log In</Nav.Link>
                            <Nav.Link href="/price">Price</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/price" element={<Price/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/signUp" element={<SignUp/>}/>
                </Routes>
            </Router>
            </div>
        )
    }
export default Header;
