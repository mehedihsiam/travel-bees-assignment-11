import React, { useEffect, useState } from 'react';
import SinglePackage from './SinglePackage/SinglePackage';



const AllPackages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('https://agile-mesa-76364.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])



    return (
        <div >
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