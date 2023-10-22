import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";


const Blogs = () => {
    const [Blogs, Setblogs] = useState([]);
    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => Setblogs(data))
    },[])
    return (
        <div className="text-3xl font-bold md:w-2/3 border">
          <h4>Blogs :{Blogs.length}</h4>
          {
            Blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
          }  
        </div>
    );
};

export default Blogs;   
