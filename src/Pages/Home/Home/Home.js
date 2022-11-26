import React from 'react';
import Advertized from '../Advertized/Advertized';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Steps from '../Steps/Steps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertized></Advertized>
            <Steps></Steps>
        </div>
    );
};

export default Home;