import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel  relative w-full">
            <div id="slide1" className="carousel-item w-full  banner-img ">
                <img style={{height:'350px'}} src={banner} alt='' className="w-full " />
               
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 top-36 right-24   ">
                <h1 className='text-5xl text-white font-bold'>Bike Mania</h1>
                
                
                </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 top-48 right-24  ">
            <p className=' text-white font-semibold text-end'>Largest Resale bike market of Bangladesh <br /> with more than thousands sale posts per week</p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 top-64 right-24">
            <Link to='/login'><button className='btn btn-sm btn-accent'>Log in</button></Link>
            </div>
        </div>
    );
};

export default Banner;