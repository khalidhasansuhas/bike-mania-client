import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useBuyer from '../../../hooks/useBuyer';


const CategoryDetailsCard = ({ cat, setBookCategory }) => {
    const { user } = useContext(AuthContext)

    const [isBuyer] = useBuyer(user?.email)

    return (
        <div>
            <div
                key={cat._id}
                className="card w-96 bg-lime-700 shadow-xl">
                <figure><img src={cat?.image} alt="Shoes" /></figure>
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