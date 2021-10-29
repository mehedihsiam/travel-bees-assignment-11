import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar className="bg-transparent">
            <Container>
                <Navbar.Brand>
                    <Link to="/home">
                        <img src="https://i.ibb.co/BP5Gp8Q/logo.png" alt="" className="img-fluid logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="mx-4 ">
                        <Link to="/myOrders" className="text-warning nav-menu">My Orders</Link>
                    </Navbar.Text>
                    <Navbar.Text className="mx-4">
                        <Link to="/allOrders" className="text-warning nav-menu">Manage all Orders</Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;