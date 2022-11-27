import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const CategoryDetails = () => {
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/category?categoryName=${path}`)
            .then(res => res.json())
            .then(data => setCategory(data))
            .catch(e => console.log(e))
    }, [path])

    return (
        <div className='mt-8  p-5 mx-5 '>
            <h1 className='text-white text-center text-3xl'>Category: {path}</h1>
            <div className='grid mt-8 mx-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    category.map(cat =><div
                    key={cat._id}
                    className="card w-96 bg-lime-700 shadow-xl">
                    <figure><img src={cat.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bike Name: {cat?.bikeName}</h2>
                        <p>Company: {cat?.companyName}</p>
                        <p>condition: {cat?.condition}</p>
                        <p>Original Price: {cat?.originalPrice}</p>
                        <p>Asking Price: {cat?.askingPrice}</p>
                        <p>Seller Name: {cat?.sellerName}</p>
                        <p>Location: {cat?.location}</p>
                        <p>Posted on: {cat?.postingTime}</p>
                        <p>contact: {cat?.contact}</p>

                        <div className="card-actions justify-end">
                            <button className="btn btn-sm">Book Now</button>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default CategoryDetails;