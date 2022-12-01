import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useBuyer from '../../hooks/useBuyer';

const BuyerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)
    if(loading || isBuyerLoading){
return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
}
    if(!user && !isBuyer){
return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}
    return children;
};

export default BuyerRoute;