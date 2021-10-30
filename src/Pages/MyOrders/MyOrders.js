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
    if (bookedPackages.length > 0) {
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
    }
    else {
        return (
            <h2 className="text-center text-muted mt-5 pt-5">You Have not booked any Pcakage</h2>
        )
    }
};

export default MyOrders;