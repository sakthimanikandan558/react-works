import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from './UserContext';

const PrivateRoute = ({ children }) => {
    // const { token } = useUserContext();
    //get token from localstrorage
    const token = localStorage.getItem('token');

    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
