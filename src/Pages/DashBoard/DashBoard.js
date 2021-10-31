import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./DashBoard.css"
const DashBoard = () => {
    const { user, logOut } = useAuth();

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="dashboard-list">
                    <div class="list-group text-center">
                        <Link to="/managePackages" className=" list-group-item list-group-item-action color-b" aria-current="true">Manage Packages</Link>
                        <Link to="/allOrders" className="list-group-item list-group-item-action color-b" aria-current="true">Manage Bookings</Link>
                        <Link to="/myOrders" className="list-group-item list-group-item-action color-b" aria-current="true">My Bookings</Link>
                        <div className="list-group-item list-group-item-action last-list">
                            {
                                user.email ? <button className=" color-b btn-a" onClick={logOut}>Log Out</button>
                                    :
                                    <Link to="/login" className="color-b">Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;