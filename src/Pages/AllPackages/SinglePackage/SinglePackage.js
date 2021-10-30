import React from 'react';
import { Link } from 'react-router-dom';

const SinglePackage = ({ tour }) => {
    const { name, description, guide, img, duration, cost, _id } = tour;
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
                <Link to={`/booking/${_id}`}><button className="btn btn-warning">Book Now</button></Link>
            </div>
        </div>
    );
};

export default SinglePackage;