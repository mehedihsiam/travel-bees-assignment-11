import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const ManagePackages = () => {
    const plus = <FontAwesomeIcon icon={faPlus} />

    const [packages, setPackages] = useState([])


    useEffect(() => {
        fetch('https://agile-mesa-76364.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])



    // handle delete packages
    const handleDeletePackage = (id) => {
        const procceed = window.confirm('Are you sure to REJECT this order?');
        if (procceed) {
            const url = `https://agile-mesa-76364.herokuapp.com/packages/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted.')
                        const remainingPackages = packages.filter(singlePackage => singlePackage._id !== id)
                        setPackages(remainingPackages);
                    }
                })
        }
    }
    return (
        <div>
            <Link to="/addPackage" className="btn btn-warning fw-bold my-2 mx-4"><span className="fw-bold">{plus}</span> Add a package</Link>

            <br />
            <div className="container">
                <table className="table table-striped table-hover my-5">
                    <thead>
                        <th>Package Name</th>
                        <th className="text-center">Cost</th>
                        <th className="text-end pe-5">Action</th>
                    </thead>
                    <tbody>
                        {
                            packages.map(singleOne => <tr>
                                <td>{singleOne.name}</td>
                                <td className="text-center">{singleOne.cost}</td>
                                <td className="text-end"><button className="btn btn-danger me-4" onClick={() => handleDeletePackage(singleOne._id)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagePackages;