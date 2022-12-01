import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    return (
        <div className="card  bg-base-100 shadow-xl image-full ">
            <figure><img  src={category?.img} alt="bikeimage" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">Category: {category.categoryName}</h2>
                <p >Description: {category.description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${category.categoryName}`}><button className="btn btn-primary">Explore</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;