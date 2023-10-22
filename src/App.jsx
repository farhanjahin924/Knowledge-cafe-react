import "./App.css";
import Blog from "./components/Blog";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
    <div className="md:flex">
    <Blogs></Blogs>
    <Bookmarks></Bookmarks>
    
    </div>
    {/* <Blog></Blog> */}
    </>
  );
}

export default App;
