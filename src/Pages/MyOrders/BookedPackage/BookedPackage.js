import React from 'react';

const BookedPackage = ({ singlePackage, bookedPackages, setBookedPackages }) => {
    const { packageName, status, _id } = singlePackage;

    const handleCancelBooking = (id) => {
        const procceed = window.confirm('Are you sure to cancel this package?');
        if (procceed) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully cancelled.')
                        const remainingPackages = bookedPackages.filter(bookedPackage => bookedPackage._id !== id)
                        setBookedPackages(remainingPackages);
                    }
                })
        }
    }
    return (
        <div>
            <h6>{packageName}</h6>
            <small>{status}</small>
            <input type="button" value="Cancel" onClick={() => handleCancelBooking(_id)} />
        </div>
    );
};

export default BookedPackage;