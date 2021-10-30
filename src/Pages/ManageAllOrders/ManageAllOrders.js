import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [bookedPackages, setBookedPackages] = useState([]);
    const status = { status: "Approved" }
    useEffect(() => {
        fetch('http://localhost:5000/orders/admin')
            .then(res => res.json())
            .then(data => setBookedPackages(data))
    }, []);


    // handle order approval
    const handleApproval = (id) => {
        const url = `http://localhost:5000/orders/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Approved this order")
                }
            })
    }


    // handle order rejection
    const handleRejection = (id) => {
        const procceed = window.confirm('Are you sure to REJECT this order?');
        if (procceed) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Rejected.')
                        const remainingPackages = bookedPackages.filter(bookedPackage => bookedPackage._id !== id)
                        setBookedPackages(remainingPackages);
                    }
                })
        }
    }
    return (
        <div className="container">
            <h2 className="text-center color-b my-5">All Booked Packages</h2>
            <table className="table table-striped table-hover">
                <thead>
                    <th>Package Name</th>
                    <th>Status</th>
                    <th className="text-end pe-5">Action</th>
                </thead>

                <tbody>
                    {
                        bookedPackages.map(booked => <tr key={booked._id}>
                            <td ><span className="fw-bold">{booked.packageName}</span> <br /> <span className="text-muted">{booked.customerName}</span></td>
                            <td>{booked.status}</td>
                            <td className="text-end">
                                <button className="btn btn-danger mx-2 my-2" onClick={() => handleRejection(booked._id)}>Reject</button>
                                <button className="btn btn-warning mx-2 my-2" onClick={() => handleApproval(booked._id)}>Approved</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;