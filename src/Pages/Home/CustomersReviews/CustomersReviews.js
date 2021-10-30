import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Review from './Review/Review';
import './CustomerReviews.css'

const CustomersReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://agile-mesa-76364.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="container">
            <h2 className="color-b my-5 text-center">Customer's Review</h2>
            <div className="review-container mb-4">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default CustomersReviews;