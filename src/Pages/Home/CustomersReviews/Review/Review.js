import React from 'react';
import './Review.css'

const Review = ({ review }) => {
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