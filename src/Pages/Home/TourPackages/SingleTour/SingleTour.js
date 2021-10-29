import React from 'react';
import './SingleTour.css'

const SingleTour = ({ tour }) => {
    const { name, description, guide, img, duration, cost } = tour;
    return (
        <div>
            <div className="package">
                <div>
                    <img src={img} alt="" className="img-fluid" />
                </div>
                <div className="py-3">
                    <h6 className="color-b">{name}</h6>
                    <p className=""><small>{description}</small></p>
                    <p><small className="fw-bold color-a">With {guide}</small></p>
                    <p><small className="fw-bold">For {duration}</small></p>
                    <p><small className="fw-bold">At only {cost}</small></p>
                </div>
                <button className="btn btn-warning">Book Now</button>
            </div>
        </div>
    );
};

export default SingleTour;