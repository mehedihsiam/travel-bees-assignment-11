import React from 'react';
import { Link } from 'react-router-dom';
import "./DashBoard.css"

const DashBoard = () => {
    return (
        <div>
            <div className="btn-popup mx-auto my-auto bg-a text-center">

                <Link to="/allOrders" className="text-white nav-menu fw-bold color-a">Manage Bookings</Link>
                <br />
                <Link to="/myOrders" className="text-white nav-menu fw-bold color-a">My Bookings</Link>
            </div>
        </div>
    );
};

export default DashBoard;