import './style.css';

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../image/Tutor-logo.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
                        width="50"
                        className="d-inline-block align-top"
                        alt="Logo" 
                        />   Tutor
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/contacts">Contact Us</Nav.Link>
                            <Nav.Link href="/signUp"></Nav.Link>
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
