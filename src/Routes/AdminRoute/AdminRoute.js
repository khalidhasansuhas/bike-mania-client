import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
   
    const {user, loading} = useContext(AuthContext)
            const location = useLocation()
            const [isAdmin, isAdminLoding] = useAdmin(user?.email)
            if(loading || isAdminLoding){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
            if(!user && !isAdmin){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
            return children;
    
};

export default AdminRoute;