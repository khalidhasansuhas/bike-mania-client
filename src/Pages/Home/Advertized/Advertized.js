import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useBuyer from '../../../hooks/useBuyer';

const Advertized = () => {
    const { user } = useContext(AuthContext)
    const [advertize, setAdvertize] = useState([])
    const [isBuyer] = useBuyer(user?.email)

    useEffect(() => {
        fetch('http://localhost:5000/bikes/advertized?isAdvertized=true')
            .then(res => res.json())
            .then(data => setAdvertize(data))
            .catch(e => console.log(e))
    }, [])
    return (


        <div className='mt-8  p-5 mx-5 rounded-md'>
            <h1 className='text-white text-center text-3xl'>Advertized Items</h1>
            <div className='grid mt-8 mx-8 gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    advertize.length
                        ? <>
                            {

                                advertize.map((adv, i) => <div key={i} className="card w-full  glass">
                                    <figure><img src={adv?.image} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Bike: {adv?.bikeName}</h2>
                                        <p>Seller Name: {adv?.sellerName}</p>
                                        <p>condition: {adv?.condition}</p>
                                        <p>Asking Price: {adv?.askingPrice}</p>
                                        <p>Location: {adv?.location}</p>
                                        <p>contact: {adv?.contact}</p>
                                        <div className="card-actions justify-end">

                                            {
                                                isBuyer
                                                    ?
                                                    <>
                                                        <Link to={`/category/${adv.categoryName}`}
                                                        ><label

                                                            htmlFor="booking-modal"
                                                            className="btn  btn-sm"
                                                        >Book Now</label></Link>
                                                    </>

                                                    : <Link to='/signup'><button className="btn  btn-sm">Be a buyer</button></Link>

                                            }
                                        </div>
                                    </div>
                                </div>)
                            }
                        </>
                        : <h3 className='text-center text-3xl font-bold my-3'>Sorry No Advertized items to show</h3>
                }
            </div>


        </div>

    );
};

export default Advertized;