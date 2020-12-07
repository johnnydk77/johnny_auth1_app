import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background: #353531;  /* fallback for old browsers 
    border-bottom: 3px solid #6b0227;
    font-family: 'Roboto Slab', serif;
    position: absolute;
    width: 100%;
}

.navbar-brand, .navbar-nav .nav-link {
    color: #F7F7FF;
    font-size: 30px;
    font-family: 'Roboto Slab', serif;
   

    &:hover {
        color: grey;
    } 
}


.navbar-toggle {
    color: #001646;
}


.link {
    color: #D7263D;
    font-family: 'Roboto Slab', serif;
}
`;

export const NavigationBar = () => (
    <Styles>
    <Navbar expand="lg">
    <Navbar.Brand href="/">Pizza 42!!!</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Item>
                <Nav.Link>
                    <Link to="/" className="link">Menu</Link>
                </Nav.Link></Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/about" className="link">Deals</Link>
                </Nav.Link></Nav.Item>
    
            <Nav.Item>
                <Nav.Link>
                    <Link to="/contact" className="link">Contact</Link>
                </Nav.Link></Nav.Item>
        </Nav>
    </Navbar.Collapse>
</Navbar>
</Styles>
)