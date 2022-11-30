import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useSeller from '../../hooks/useSeller';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    const [isSeller, isSellerLoding] = useSeller(user?.email)
    if(loading || isSellerLoding){
return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
}
    if(!user && !isSeller){
return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}
    return children;
};

export default SellerRoute;