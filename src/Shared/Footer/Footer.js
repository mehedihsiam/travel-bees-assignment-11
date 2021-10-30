import React from 'react';
import './Footer.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    return (
        <footer className=" text-white p-2 mt-5">
            <div className="  d-block container">
                <div className="footer-container py-4">
                    <div>
                        <br />
                        <p className="footer-about">Travel Bee's is a trusted travel management agency. We have 5 years of experience. From 2016 we are aranging tours all over the world. We have aranged 1000+ tours globally. And our customers are fully satisfied with our service.
                        </p>
                        <br />
                        <p><span className="fs-4 text-warning">{map} </span> Savar, Dhaka, Bangladesh</p>
                        <p><span className="fs-4 text-warning">{phone} </span> +8801953387415</p>
                    </div>
                    <div>
                        <p className="text-warning fw-bold text-center fs-4">Visitor Counter</p>
                        <h3 className="text-center">20123654</h3>
                    </div>
                    <div>
                        <p className="text-warning fs-4 fw-bold text-center">Contact</p>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Messege"></textarea>
                        </div>
                        <input type="submit" value="Send" className="btn btn-warning" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;