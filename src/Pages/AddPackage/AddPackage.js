import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data, e) => {
        axios.post('http://localhost:5000/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Package has been added')
                    reset();
                }
            });
    };
    const onError = (errors, e) => console.log(errors, e);

    return (
        <div className="container text-center">
            <form onSubmit={handleSubmit(onSubmit, onError)} className="form">
                <input {...register("name")} placeholder="Package Name" className="mb-3" /> <br />
                <textarea {...register("description")} placeholder="Tour Description" className="mb-3" /> <br />
                <input {...register("guide")} placeholder="Guide Name" className="mb-3" /> <br />
                <input {...register("duration")} placeholder="Tour duration" defaultValue="Days" className="mb-3" /> <br />
                <input {...register("cost")} placeholder="Tour Cost BDT" defaultValue="BDT" className="mb-3" /> <br />
                <input {...register("img")} placeholder="Image URL" className="mb-3" /> <br />
                <input {...register("status")} value="pending" className="mb-3" /> <br />
                <button type="submit" className="btn btn-warning">Add</button>
            </form>
        </div>
    );
};

export default AddPackage;