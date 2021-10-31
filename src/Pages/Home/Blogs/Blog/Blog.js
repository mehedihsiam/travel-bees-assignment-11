import React from 'react';
import './Blog.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = ({ blog }) => {
    AOS.init();
    const { name, article, author, img } = blog;
    return (
        <div className="blog-container my-5" data-aos="flip-up">
            <div>
                <img src={img} alt="" className="img-fluid rounded" />
            </div>
            <div>
                <h5 className="color-b">{name}</h5>
                <p>{article}</p>
                <p><small className="color-a fw-bold">{author}</small></p>
            </div>
        </div>
    );
};

export default Blog;