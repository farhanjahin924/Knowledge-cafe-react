import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import propTypes from "prop-types"


const Blogs = ({handleBookMarks, handleMarkBtn}) => {
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
            Blogs.map(blog => <Blog blog={blog} key={blog.id} handleBookMarks={handleBookMarks} handleMarkBtn={handleMarkBtn}></Blog>)
          }  
        </div>
    );
};
Blogs.propTypes = {
  blog: propTypes.object,
  handleBookMarks : propTypes.func
}
export default Blogs;   
