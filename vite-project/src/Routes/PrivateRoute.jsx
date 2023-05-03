import React, { useContext } from 'react';
import { Authcontext } from '../component/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext);
    let location = useLocation();
    if (loading) {
        return <p>Loading...</p>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;