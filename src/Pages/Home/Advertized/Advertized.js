import React from 'react';

const Advertized = () => {
    return (

        <div className='mt-8 border p-5 mx-5 rounded-md'>
            <h1 className='text-white text-center text-3xl'>Advertized Items</h1>
            <div className='grid mt-8 mx-8 gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <div className="card w-full  glass">
                <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
            <div className="card  w-full glass">
                <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
            <div className="card w-full glass">
                <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
            <div className="card w-full glass">
                <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-actions justify-center mt-5">
                        <button className="btn btn-primary">See All</button>
                    </div>
        </div>

    );
};

export default Advertized;