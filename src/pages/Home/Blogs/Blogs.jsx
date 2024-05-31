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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                {
                    blogs.map(blog => <BlogCard
                        key={blog.id}
                        blog={blog}
                    ></BlogCard>)
                }
            </div>
        </>
    );
};

export default Blogs;