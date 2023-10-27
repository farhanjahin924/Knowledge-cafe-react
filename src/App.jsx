import { useState } from "react";
import "./App.css";
import Blog from "./components/Blog";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const handleBookMarks = (blog) => {
    // console.log(blog.title);
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);

  };
  return (
    <>
      <Header></Header>
    <div className="md:flex">
    <Blogs handleBookMarks={handleBookMarks}></Blogs>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>
    
    </div>
    {/* <Blog></Blog> */}
    </>
  );
}

export default App;
