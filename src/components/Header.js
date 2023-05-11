import './styles/style.css';

import React from 'react';
import { Navbar, Container } from 'react-bootstrap'
import logo from '../components/images/svg/Tutor.svg'
import { Link } from 'react-router-dom'





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
                            <Link to="/" >Главная</Link>
                            <Link to="/about">О Нас </Link>
                            <Link to="/contacts">Свяжитесь с нами</Link>
                            <Link to="/signUp">Войти</Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    )
}
export default Header;
