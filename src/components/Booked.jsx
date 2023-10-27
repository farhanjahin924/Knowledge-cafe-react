

const Booked = ({booked}) => {
    const {title} = booked;
    console.log(title);
    return (
        
        <div>
            {title}
        </div>
    );
};

export default Booked;