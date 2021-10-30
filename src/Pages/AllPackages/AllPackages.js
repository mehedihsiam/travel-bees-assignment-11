import React, { useEffect, useState } from 'react';
import SinglePackage from './SinglePackage/SinglePackage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const AllPackages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])


    const plus = <FontAwesomeIcon icon={faPlus} />
    return (
        <div>
            <Link to="/addPackage" className="btn btn-primary"><span className="fw-bold">{plus}</span> Add a package</Link>
            <br />
            <br />
            <h2 className="text-center color-b my-5">Our Tour Packages</h2>
            <div className="container package-container">
                {
                    packages.map(singlePackage => <SinglePackage
                        key={singlePackage._id}
                        tour={singlePackage}
                    ></SinglePackage>)
                }
            </div>
            <br />
            <hr />
        </div>
    );
};

export default AllPackages;