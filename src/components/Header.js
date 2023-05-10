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
            <Navbar collapseOnSelect expand="md">
                <Container id='bar'>
                    <Navbar.Brand href="/">
                        <img 
                        src={logo}
                        height="100"
                        width="200"
                        className="d-inline-block align-top"
                        alt="Logo" 
                        /> 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className='nav-list'>
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/about">О Нас </Nav.Link>
                            <Nav.Link href="/contacts">Свяжитесь с нами</Nav.Link>
                            <Nav.Link href="/signUp">Войти</Nav.Link>
                        </div>
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
