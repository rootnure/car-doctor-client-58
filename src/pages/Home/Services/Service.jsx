import PropTypes from 'prop-types';


const Service = ({ service }) => {

    const { title, img, price } = service;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-500'>Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object
}

export default Service;