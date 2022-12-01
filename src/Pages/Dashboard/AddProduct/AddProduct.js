import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleAddProduct = data => {
        data.preventDefault()
        const form = data.target;
        const categoryName = form.categoryName.value
        const bikeName = form.bikeName.value;
        const companyName = form.companyName.value;
        const location = form.location.value;
        const originalPrice = form.originalPrice.value;
        const askingPrice = form.askingPrice.value;
        const usedTime = form.usedTime.value;
        const image = form.image.value;
        const contact = form.contact.value;
        const condition = form.condition.value;
        const sellerEmail = user?.email;
        const sellerName = user?.displayName;
        const postingTime = form.postingTime.value;
        const purchaseYear = form.purchaseYear.value;

        const product = {
            categoryName,
            bikeName,
            companyName,
            location,
            originalPrice,
            askingPrice,
            image,
            usedTime,
            contact,
            condition,
            sellerEmail,
            sellerName,
            postingTime,
            purchaseYear
        }


        fetch('http://localhost:5000/bikes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('product added successfully')
                navigate('/dashboard/myproducts')
            })

    }

    return (
        <div className='mx-5'>
            <h3 className='text-center text-3xl font-bold my-3'>Add a Product</h3>
            <form onSubmit={handleAddProduct}>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-6'>

                    <input name='bikeName' type="text" placeholder="Bike Name" className="input input-bordered w-full " required/>
                    <select name='categoryName' className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required>
                        <option value='buyer' required selected disabled>Selecte bike Category</option>
                        <option value='standard'>standard</option>
                        <option value='crusier'>crusier</option>
                        <option value='sports'>sports</option>
                    </select>
                    <input name='companyName' required type="text" placeholder="Company Name" className="input input-bordered w-full " />
                    <input name='location' required type="text" placeholder="Your Location" className="input input-bordered w-full " />
                    <input name='originalPrice' required type="text" placeholder="Bike's original Price" className="input input-bordered w-full " />
                    <input name='askingPrice' required type="text" placeholder="asking price" className="input input-bordered w-full " />
                    <input name='image' required type="text" placeholder="bike Image " className="input input-bordered w-full " />
                    <input name='usedTime' required type="text" placeholder="Years Used" className="input input-bordered w-full " />
                    <input name='contact' required type="text" placeholder="Your mobile number" className="input input-bordered w-full " />
                    <select name='condition'  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required>
                        <option selected disabled>Selecte bike's Condition</option>
                        <option value='excellent'>excellent</option>
                        <option value='good'>good</option>
                        <option value='fair'>fair</option>
                    </select>
                    <input name='buyer' disabled value={user?.displayName} type="text" placeholder="Type here" className="input input-bordered w-full " />
                    <input name='email' disabled value={user?.email} type="email" placeholder="Type here" className="input input-bordered w-full" />
                    <input name='postingTime' required type="text" placeholder="Posting Time" className="input input-bordered w-full " />
                    <input name='purchaseYear' required type="text" placeholder="Years of purchasing" className="input input-bordered w-full " />
                </div>
                <div className='w-full flex justify-center'>
                    <input type="submit" value="Add Product" className='mt-5  btn btn-success' />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;