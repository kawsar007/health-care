import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <img src="./images/logo.png" alt="" />
            </div>
            <div className="header_right">
                <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Toggle/>
                        <Navbar.Collapse className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Navbar.Text>
                                Sign in as: <a href="#login">Kawsar</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        </div>
    )
}

export default Header
