import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <div className="header_left">
                <Link to="/"> <img src="./images/logo.png" alt="" /></Link>
            </div>
            <div className="header_right">
                <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            {
                                user.email ? (
                                    <div>
                                    <Navbar.Text>
                                        Sign in as: <Link to="/login">{user.displayName}</Link>
                                    </Navbar.Text>
                                    <button className="logoutBtn" onClick={logOut} type="button">Logout</button>
                                    </div>
                                ) : (<Nav.Link as={Link} to="/login">Login</Nav.Link>)
                            }


                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        </div>
    )
}

export default Header
