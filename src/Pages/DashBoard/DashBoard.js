import React from 'react';
import { Link } from 'react-router-dom';
import "./DashBoard.css"
const DashBoard = () => {

    return (
        <div>
            <div className="btn-popup mx-auto my-auto bg-a text-center">

                <Link to="/managePackages" className=" btn btn-warning fw-bold my-2">Manage Packages</Link>
                <br />
                <Link to="/allOrders" className=" btn btn-warning fw-bold my-2">Manage Bookings</Link>
                <br />
                <Link to="/myOrders" className="btn btn-warning fw-bold my-2">My Bookings</Link>
            </div>
        </div>
    );
};

export default DashBoard;