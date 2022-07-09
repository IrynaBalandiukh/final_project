import {useLocation, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import React from 'react';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const {isAuth} = useSelector(state => state.auth);

    if (!isAuth) {
        return <Navigate to={'/auth'} state={location}/>
    }
    return children;
};

export {RequireAuth};