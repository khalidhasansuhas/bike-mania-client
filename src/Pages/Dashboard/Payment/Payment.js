import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51MA9EhH2WIdtmFpldXWhxqEpPn2In7fXVOy0lyncZZSAyrxjpoKWKF9SH1jIaR9rFt0MDYkSp3jhVtg8qrTsOwnW00xttKiXi6');

const Payment = () => {
    const booking = useLoaderData();
    return (
        <div>
            <h3 className='text-center text-3xl font-bold my-3'>Booking for {booking.bike}</h3>
            <p className='text-center'>Please Pay {booking.price} Taka to buy this bike</p>
            <div className='w-96 my-6 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    booking = {booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;