import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [Blogs, setblogs] = useState([]);
    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setblogs(data))
    },[])
    return (
        <div>
            hello
        </div>
    );
};

export default Blogs;