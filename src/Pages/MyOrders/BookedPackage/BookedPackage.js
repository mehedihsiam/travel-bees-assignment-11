import React from 'react';

const BookedPackage = ({ singlePackage, bookedPackages, setBookedPackages }) => {
    const { packageName, status, _id } = singlePackage;

    const handleCancelBooking = (id) => {
        const procceed = window.confirm('Are you sure to cancel this package?');
        if (procceed) {
            const url = `https://agile-mesa-76364.herokuapp.com/orders/${id}`
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
        <tr>
            <td>{packageName}</td>
            <td>{status}</td>
            <td className="text-end"><input className="mx-4 btn btn-danger" type="button" value="Cancel" onClick={() => handleCancelBooking(_id)} /></td>
        </tr>
    );
};

export default BookedPackage;