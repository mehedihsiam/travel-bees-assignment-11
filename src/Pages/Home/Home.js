import React from 'react';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import CustomersReviews from './CustomersReviews/CustomersReviews';
import TourPackages from './TourPackages/TourPackages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourPackages></TourPackages>
            <CustomersReviews></CustomersReviews>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;