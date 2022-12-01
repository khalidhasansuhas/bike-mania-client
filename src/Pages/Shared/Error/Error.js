import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import error from '../../../assets/error.jpg'

const Error = () => {

    const err = useRouteError()
    return (
        <div>
            <section className="flex justify-between items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <img className='w-96' src={error} alt="" />
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                            <span className="sr-only">Error</span>{err.status}
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, The page you are looking for {err.statusText || err.message}.</p>


                        <div className="card-body mx-auto">
                            <button className='btn btn-primary'>
                                
                            <Link type="button" to='/home'
                                className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"> Back To Home </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;