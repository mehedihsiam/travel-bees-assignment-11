import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleTour from './SingleTour/SingleTour';
import './TourPackage.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const TourPackages = () => {
    AOS.init();
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('https://agile-mesa-76364.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    const slicedPackages = packages.slice(0, 6);
    return (
        <div>
            <br />
            <br />
            <h2 className="text-center color-b my-5">Our Special Tour Packages</h2>
            <div className="container package-container">
                {
                    slicedPackages.map(singlePackage => <SingleTour
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