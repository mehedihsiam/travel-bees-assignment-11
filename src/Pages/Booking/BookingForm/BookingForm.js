import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import "./BookingForm.css"

const BookingForm = ({ packageName }) => {
    const { user } = useAuth();


    const history = useHistory();
    const location = useLocation();

    const url = location.state?.from || '/allPackages';


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (shippingInfo, e) => {
        const status = 'pending'
        const { customerName, email, nidNumber } = shippingInfo;
        const orderData = { customerName, email, nidNumber, packageName, status }
        axios.post('https://agile-mesa-76364.herokuapp.com/orders', orderData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Order Has Benn Placed. Please Wait for Admin Approving.')
                    reset();
                    history.push(url)
                }
            })

    };
    const onError = (errors, e) => console.log(errors, e);
    return (
        <div className="text-center form">
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <input {...register("customerName")} value={user.displayName} className="mb-2" />
                <br />
                <input {...register("email")} value={user.email} className="mb-2" />
                <br />
                <input {...register("nidNumber")} placeholder="NID Number" className="mb-2" required />
                <br />
                <button type="submit" className="btn btn-warning">Submit</button>
            </form>
        </div>
    );
};

export default BookingForm;