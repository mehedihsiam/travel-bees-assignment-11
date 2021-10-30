import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://agile-mesa-76364.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="container">
            <h2>Blogs</h2>
            {
                blogs.map(blog => <Blog
                    key={blog._id}
                    blog={blog}
                ></Blog>)
            }
        </div >
    );
};

export default Blogs;