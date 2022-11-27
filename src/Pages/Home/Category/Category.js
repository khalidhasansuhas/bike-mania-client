import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => { 
        fetch('http://localhost:5000/categories')
            .then(res =>res.json())
            .then(data => setCategories(data))
            .catch(e=>console.log(e))
    }, [])
    
    return (
        <div className='mt-8  p-5 mx-5 '>
            <h1 className='text-white text-center text-3xl'>Categories</h1>
            <div className='grid mt-8 mx-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map((category) => <CategoryCard
                    key={category.categoryId}
                    category={category}
                    >
                    </CategoryCard>)
                }

            </div>
        </div>
    );
};

export default Category;