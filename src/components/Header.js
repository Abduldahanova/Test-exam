import './styles/style.css';

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../components/images/svg/Tutor.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from '../nav-pages/About'
import Contacts from '../nav-pages/Contacts'
import SignUp from '../nav-pages/SignUp'




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
                            <Nav.Link href="/">Глвавная</Nav.Link>
                            <Nav.Link href="/about">О Нас </Nav.Link>
                            <Nav.Link href="/contacts">Свяжитесь с нами</Nav.Link>
                            <Nav.Link href="/signUp">Войти</Nav.Link>
                            {/* <Nav.Link href="/price">Price</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/signUp" element={<SignUp/>}/>
                </Routes>
            </Router>
            </div>
        )
    }
    export default Header;
