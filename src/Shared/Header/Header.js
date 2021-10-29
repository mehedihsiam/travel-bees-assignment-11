import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();

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
                        <Link to="/myOrders" className="text-warning nav-menu fw-bold color-a">My Orders</Link>
                    </Navbar.Text>
                    <Navbar.Text className="mx-4">
                        <Link to="/allOrders" className="text-warning nav-menu fw-bold color-a">Manage all Orders</Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        {
                            user.email ? <button className="btn btn-warning color-a fw-bold me-2" onClick={logOut}>Log Out</button>
                                :
                                <Link to="/login" className="btn btn-warning color-a fw-bold me-2">Login</Link>
                        }
                    </Navbar.Text>
                    <Navbar.Text>
                        {
                            user.email ? <p className="color-a fw-bold">{user?.displayName}</p>
                                :
                                <p>No Logged in user</p>
                        }
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;