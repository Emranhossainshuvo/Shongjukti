import { useState } from "react";
import { useEffect } from "react";
import BlogCard from "../BlogCard/BlogCard";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('./blogs.json')
            .then((res) => res.json())
            .then(data => setBlogs(data))
            .catch((error) => console.log("the error:", error))
    })


    return (
        <>
            {
              blogs.map(blog => <BlogCard
              key={blog.id}
              blog={blog}
              ></BlogCard>)  
            }
        </>
    );
};

export default Blogs;