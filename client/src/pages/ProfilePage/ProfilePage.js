import jwtDecode from 'jwt-decode';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {Profile} from '../../components';
import {userActions} from '../../redux';
import css from './ProfilePage.module.css';

const ProfilePage = () => {
    const {user} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const {id} = jwtDecode(token);

    useEffect(() => {
        dispatch(userActions.getById({id: id}))
    }, [dispatch]);

    const logOut = () => {
        localStorage.clear()
        navigate('/auth')
    };

    return (
        <div>
            <div className={css.container}>
                <p>User profile</p>
                <button className={css.button} onClick={() => logOut()}>Log out</button>
            </div>
            {user && <Profile user={user}/>}
        </div>
    );
};

export {ProfilePage};