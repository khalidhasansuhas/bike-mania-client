import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const categoryData = [
        {
            id: 1,
            name: 'Standard',
            description: 'Standard category covers all the bikes from 50-150cc segment',
            img: 'https://bd.gaadicdn.com/processedimages/bajaj/platina-100/494X300/platina-100603df5673adb1.jpg?imwidth=880'
        },
        {
            id: 2,
            name: 'Sports',
            description: 'Sports category starts from 150-to above',
            img: 'https://ic1.maxabout.us/autos/tw_india//N/2022/2/new-suzuki-gixxer-150-price-in-india-2.jpg'
        },
        {
            id: 3,
            name: 'Crusier',
            description: 'Cruiser category covers all the comfortable cruiser bikes regardless of cc limit ',
            img: 'https://images.unsplash.com/photo-1658984559912-b96d783a2d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1enVraSUyMGdpeHhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
    ]
    return (
        <div className='mt-8  p-5 mx-5 '>
             <h1 className='text-white text-center text-3xl'>Categories</h1>
            <div className='grid mt-8 mx-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                categoryData.map((category,i) => <div key={i} className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={category.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Category: {category.name}</h2>
                    <p >Description: {category.description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/category/${category.id}`}><button className="btn btn-primary">Explore</button></Link>
                    </div>
                </div>
            </div>)
               }
                
            </div>
        </div>
    );
};

export default Category;