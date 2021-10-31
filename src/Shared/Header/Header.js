import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const profileIcon = <FontAwesomeIcon icon={faUserCircle} />
    const { user } = useAuth();
    // console.log(user.photoURL)

    return (
        <Navbar bg="transparent" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/home">
                        <img src="https://i.ibb.co/BP5Gp8Q/logo.png" alt="" className="img-fluid logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">

                    <Nav className="mx-4 text-center">
                        <Link to="/allPackages" className="color-b nav-menu fw-bold color-a">All Packages</Link>
                    </Nav>



                    <Nav.Link className="">
                        {
                            user.email ?
                                <Link to="/dashBoard" className="fw-bold">
                                    <div className="text-center">
                                        <img src={user.photoURL} alt="" className="profile" />
                                    </div>
                                </Link>
                                :
                                <Link to="/dashBoard" className="fs-2 color-b">{profileIcon}</Link>
                        }
                    </Nav.Link>


                    <Nav.Link className="mx-4">

                    </Nav.Link>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;