import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Blog = ( {blog, handleBookMarks,handleMarkBtn}) => {
    const {title,cover,author_img,reading_time,author,posted_date,hashtags} =blog;
    return (
        <div >
           
           <img className='w-full' src={cover} alt={title} /> 
           <div className='flex  justify-between items-center'>
            <div >
                <div className='flex gap-5' >
                <img className='h-10' src={author_img} alt="" />
                <div>
                    <p className='font-bold text-2xl'>{author}</p>
                    <h1 className='text-gray text-base font-semibold'>{posted_date}</h1>
                </div>
                </div>
            </div>
            <div className='flex gap-1 items-center '>
                <p className='text-xl font-medium'>{reading_time} min read</p>
                <button onClick={() =>{handleBookMarks(blog)}} className='text-red-500'><FaBookmark className='text-xl font-medium ml-2 text-red-700'></FaBookmark></button>
            </div>
           </div>
           <h2 className='text-5xl font-blod    '> {title}</h2>
            <p >
            {
                hashtags.map(  (hash,index) => <span className='ml-3' key={index} ><a href="">#{hash}</a></span>)
            }
            </p>
            <button onClick={()=> {handleMarkBtn(reading_time)}} className=' mb-20 text-base text-blue-800 '><p>Mark as read</p></button>
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object,
    handleBookMarks : PropTypes.func
}
// proptypes problem not solved 
export default Blog;
