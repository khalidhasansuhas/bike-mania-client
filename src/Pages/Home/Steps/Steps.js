import React from 'react';

const Steps = () => {
    return (
       <div className='w-full flex justify-center '>
        <div className='mt-8  p-5 '>
        <h1 className='text-white text-center text-3xl  py-5'>Become a Seller</h1>
         <ul className="steps">
            <li className="step step-info">Register with buyer account</li>
            <li className="step step-info">Go to Dashboard</li>
            <li className="step step-info">Add a Product</li>
            <li className="step step-info">Sale</li>
            <li className="step step-error" data-content="?">Become a Seller</li>
        </ul>
       </div>
       </div>
    );
};

export default Steps;