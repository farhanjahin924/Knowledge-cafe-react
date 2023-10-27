// import Bookmark from "./bookmark";
import Booked from "./Booked"
const Bookmarks = ({ bookmarks ,markRead}) => {
  return (
    <>
     
      
      <div className="md:w-1/3 border">
      <p>Reading time : {markRead}</p>
      <br />  
      Book marks :{bookmarks.length}
      
      {
            bookmarks.map( (booked,idx )=> <Booked booked ={booked} key={idx}> </Booked>)
        }
      </div>
    
      
{/* 
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
       
      ))} */}
      
        
      
    </>
  );
};

export default Bookmarks;
