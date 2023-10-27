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
  const[markRead,setMarkRead] = useState(0);
  const handleMarkBtn = (time) => {
    
    const newMarked = markRead + time;
    setMarkRead(newMarked);
    console.log('btn clicked',time,markRead)
  }
  return (
    <>
      <Header></Header>
    <div className="md:flex">
    <Blogs handleBookMarks={handleBookMarks} handleMarkBtn={handleMarkBtn}></Blogs>
    <Bookmarks bookmarks={bookmarks} markRead={markRead}></Bookmarks>
    
    </div>
    {/* <Blog></Blog> */}
    </>
  );
}

export default App;
