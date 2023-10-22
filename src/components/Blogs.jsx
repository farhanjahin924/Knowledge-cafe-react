import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [Blogs, Setblogs] = useState([]);
    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => Setblogs(data))
    },[])
    return (
        <div className="text-3xl font-bold md:w-2/3 border">
          <h4>Blogs :</h4>  
        </div>
    );
};

export default Blogs;   
