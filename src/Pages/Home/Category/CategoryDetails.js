import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BookingModal from './BookingModal';
import CategoryDetailsCard from './CategoryDetailsCard';


const CategoryDetails = () => {
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const [category, setCategory] = useState([]);
    const [bookCategory, setBookCategory]= useState(null)
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
                    category.map(cat =><CategoryDetailsCard
                    key={cat.id}
                    cat={cat}
                    setBookCategory={setBookCategory}
                    ></CategoryDetailsCard>)
                }
            </div>
           { 
            bookCategory &&
           <BookingModal
           setBookCategory={setBookCategory}
            bookCategory={bookCategory}
           
            ></BookingModal>}
        </div>
    );
};

export default CategoryDetails;