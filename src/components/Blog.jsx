import { BsBookmark } from 'react-icons/bs';
import PropTypes from 'prop-types';
const Blog = ( {blog}) => {
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
                <button><BsBookmark className='text-xl font-medium ml-2'></BsBookmark></button>
            </div>
           </div>
           <h2 className='text-5xl font-blod    '> {title}</h2>
            <div className=' mb-20 '>
            {
                hashtags.map(  (hash,index) => <span className='ml-3' key={index}><a href="">#{hash}</a></span>)
            }
            </div>
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;