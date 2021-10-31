import React from 'react';
import './Review.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = ({ review }) => {
    AOS.init();
    const { name, reviews, img } = review;
    return (
        <div>
            <div className="single-review p-4 text-center my-4" data-aos="flip-right">
                <img src={img} alt="" className="img-fluid" />
                <h4>{name}</h4>
                <p>{reviews}</p>
            </div>
        </div>
    );
};

export default Review;