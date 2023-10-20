import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className='flex justify-center items-center mt-24 py-24'>
            <span className="loading loading-ball loading-lg text-primary"></span>
            <span className="loading loading-ball loading-xl text-secondary"></span>
            <span className="loading loading-ball loading-xl btn-success"></span>
            <span className="loading loading-ball loading-lg text-accent"></span>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;