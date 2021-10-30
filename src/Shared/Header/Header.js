import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const profileIcon = <FontAwesomeIcon icon={faUserCircle} />
    const { user, logOut } = useAuth();
    console.log(user.photoURL)

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
                        <Link to="/allPackages" className="text-warning nav-menu fw-bold color-a">All Packages</Link>
                    </Navbar.Text>
                    <Navbar.Text className="mx-4">

                    </Navbar.Text>
                    <Navbar.Text>
                        {
                            user.email ? <button className="btn btn-warning color-a fw-bold me-2" onClick={logOut}>Log Out</button>
                                :
                                <Link to="/login" className="btn btn-warning color-a fw-bold me-2">Login</Link>
                        }
                    </Navbar.Text>
                    <Navbar.Text className="ms-5">
                        {
                            user.email ?
                                <Link to="/dashBoard" className="color-a fw-bold">
                                    <div className="text-center">
                                        <img src={user.photoURL} alt="" className="profile" />
                                        <br />
                                        <small className="">{user?.displayName}</small>
                                    </div>
                                </Link>
                                :
                                <p className="fs-3 text-warning">{profileIcon}</p>
                        }
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;