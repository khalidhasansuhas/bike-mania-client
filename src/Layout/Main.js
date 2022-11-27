import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

export const BikeContext = createContext([])

const Main = () => {
    const bikes = useLoaderData()
    return (
        <div>
            <BikeContext.Provider value={bikes}>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </BikeContext.Provider>

        </div>
    );
};

export default Main;