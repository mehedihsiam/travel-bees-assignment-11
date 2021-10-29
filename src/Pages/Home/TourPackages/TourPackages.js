import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleTour from './SingleTour/SingleTour';
import './TourPackage.css'

const TourPackages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div>
            <br />
            <br />
            <h2 className="text-center color-b my-5">Our Special Tour Packages</h2>
            <div className="container package-container">
                {
                    packages.map(singlePackage => <SingleTour
                        key={singlePackage._id}
                        tour={singlePackage}
                    ></SingleTour>)
                }
            </div>
            <br />
            <hr />
        </div>
    );
};

export default TourPackages;