import propTypes from 'prop-types';

Bookmark.propTypes = {
    bookmark : propTypes.array
};
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='text-2xl'>
            {
                {title}
            }
        </div>
    );
};

export default Bookmark;