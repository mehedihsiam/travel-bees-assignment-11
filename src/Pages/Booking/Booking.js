import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import BookingForm from './BookingForm/BookingForm';

const Booking = () => {
    const { id } = useParams();

    const [bookingPackage, setBookingPackage] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/booking/${id}`)
            .then(res => res.json())
            .then(data => setBookingPackage(data))
    }, [])
    const { name, description, guide, cost, img, duration } = bookingPackage;
    return (
        <div className="container">
            <h1 className="color-b text-center mt-4 mb-4">Tour Details</h1>
            <div className="d-flex mb-5">
                <div><img src={img} alt="" /></div>
                <div className="px-4">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p className="fw-bold">Duration: {duration}</p>
                    <p className="fw-bold color-a">{cost}</p>
                    <p className="fw-bold bg-warning text-center p-2">{guide} will Guide This tour</p>
                </div>
            </div>
            <BookingForm
                key={bookingPackage._id}
                packageName={name}
            ></BookingForm>
        </div>
    );
};

export default Booking;