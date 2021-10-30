import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import BookedPackage from './BookedPackage/BookedPackage';

const MyOrders = () => {
    const { user } = useAuth();
    const [bookedPackages, setBookedPackages] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookedPackages(data));
    }, [bookedPackages]);
    return (
        <div>
            {
                bookedPackages.map(singleBookedPackage => <BookedPackage
                    key={singleBookedPackage._id}
                    singlePackage={singleBookedPackage}
                    bookedPackages={bookedPackages}
                    setBookedPackages={setBookedPackages}
                ></BookedPackage>)
            }
        </div>
    );
};

export default MyOrders;