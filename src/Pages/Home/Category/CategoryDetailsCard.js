import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useBuyer from '../../../hooks/useBuyer';
import { FaCheck } from "react-icons/fa";
import useVerified from '../../../hooks/useVerified';


const CategoryDetailsCard = ({ cat, setBookCategory }) => {
    const { user } = useContext(AuthContext)

    const [isBuyer] = useBuyer(user?.email)
    const [isVerified] = useVerified(cat?.sellerEmail)
    return (
        <div>
            <div
                key={cat._id}
                className="card w-96 bg-lime-700 shadow-xl">
                <figure><img src={cat?.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Bike Name: {cat?.bikeName}</h2>
                    <div className='flex '>
                        <p>Seller Name: <span className='text-white'>{cat?.sellerName}</span></p>
                        {
                            isVerified 
                                ? <div className="badge tooltip bg-black badge-success badge-outline" data-tip="Verified Seller">
                                    <FaCheck></FaCheck>
                                </div>
                                : <></>

                        }
                    </div>
                    <p>Company: {cat?.companyName}</p>
                    <p>condition: {cat?.condition}</p>
                    <p>Original Price: {cat?.originalPrice}</p>
                    <p>Asking Price: {cat?.askingPrice}</p>
                    <p>Location: {cat?.location}</p>
                    <p>Posted on: {cat?.postingTime}</p>
                    <p>contact: {cat?.contact}</p>

                    <div className="card-actions justify-end">
                        {
                            cat?.status?.status === 'booked' ?
                                <label
                                    htmlFor="booking-modal"
                                    aria-disabled
                                    className="btn  btn-sm"
                                >Already Booked</label>
                                :
                                <>
                                    {
                                        isBuyer
                                            ?
                                            <label
                                                onClick={() => setBookCategory(cat)}
                                                htmlFor="booking-modal"
                                                className="btn  btn-sm"
                                            >Book Now</label>

                                            : <Link to='/signup'><button className="btn  btn-sm">Be a buyer</button></Link>

                                    }
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetailsCard;