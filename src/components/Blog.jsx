
import PropTypes from 'prop-types';
const Blog = ( {blog}) => {
    const {title,cover,author_img,reading_time,author,posted_date,hashtags} =blog;
    return (
        <div>
           
           <img className='' src={cover} alt={title} /> 
           <div className='flex  justify-between items-center'>
            <div >
                <div className='flex gap-5' >
                <img className='h-10' src={author_img} alt="" />
                <div>
                    <p>{author}</p>
                    <h1>{posted_date}</h1>
                </div>
                </div>
            </div>
            <div className='flex gap-1 '>
                <p className='text-xl font-medium'>{reading_time} min read</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322Z" stroke="#111111" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
           </div>
           <h2> {title}</h2>
            {
                hashtags.map(  (hash,index) => <span className='ml-3' key={index}><a href="">#{hash}</a></span>)
            }
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;