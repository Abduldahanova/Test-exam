import './styles/header.css';

import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../components/images/svg/Tutor.svg'
import { Link } from 'react-router-dom'





const Header = () => {
    return (

        <div>
            <Navbar collapseOnSelect expand="md" variant="dark">
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
                        <Nav className='nav-list'>
                            <Link to="/" >Главная</Link>
                            <Link to="/about">О Нас </Link>
                            <Link to="/contacts">Свяжитесь с нами</Link>
                            <Link to="/signUp">Войти</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    )
}
export default Header;
