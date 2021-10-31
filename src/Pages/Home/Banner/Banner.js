import React from 'react';
import './Banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    AOS.init();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12 banner-left">
                    <img src="https://i.ibb.co/jLSyW2q/BANNER.png" alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 col-sm-12" data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <h1 className="mt-5"><span className="color-a">TRAVEL</span> <span className="color-b">BEE'S</span></h1>
                    <p className="color-b">
                        Travel Bee's is a trusted travel management agency.
                        We have 5 years of experience. From 2016 we are aranging tours all over the world. We have aranged 1000+ tours globally. And our customers are fully satisfied with our service.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;