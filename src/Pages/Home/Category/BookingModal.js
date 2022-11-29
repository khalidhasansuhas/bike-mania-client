import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ bookCategory, setBookCategory }) => {
    const {user} = useContext(AuthContext)
    const { askingPrice, bikeName, categoryName, _id } = bookCategory;

    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target;
        const bike = form.bike.value;
        const buyer = form.buyer.value;
        const price = form.price.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            bookingId : _id,
            bike,
            buyer,
            price,
            email ,
            phone,
            location
        }
        
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                updateBike(_id)
                console.log(data)
                form.reset()
                toast.success(`You Have successfully booked ${bikeName}`)
            }
        })

        setBookCategory(null)
        
    }

    const updateBike = (_id) =>{
        
        fetch(`http://localhost:5000/bikes/${_id}`,{
            method:'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status:'booked'})
        
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Catgory Name: {categoryName} </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input name='bike' disabled  value={bikeName} type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <input name='price' disabled  value={askingPrice} type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <input name='buyer' disabled value={user?.displayName} type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <input name='email' disabled  value={user?.email} type="email" placeholder="Type here" className="input input-bordered w-full " />
                        <input name='phone' required type="text" placeholder="Your Phone Number" className="input input-bordered w-full " />
                        <input name='location' required type="text" placeholder="Your Location" className="input input-bordered w-full " />
                        <input type="submit" value="Submit" className='w-full btn' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;