import React from 'react';
import './Blog.css'

const Blog = ({ blog }) => {
    const { name, article, author, img } = blog;
    return (
        <div className="blog-container my-5">
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