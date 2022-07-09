import {Link} from 'react-router-dom';
import React from 'react';
import {useDispatch} from 'react-redux';

import css from './Profile.module.css';
import {userActions} from '../../redux';

const Profile = ({user}) => {
    const dispatch = useDispatch();
    const {email, first_name, last_name, nick_name, description, position} = user;

    return (
        <div className={css.container}>
            <div>
                <div className={css.item}>Email: <span>{email}</span></div>
                <div className={css.item}>First name: <span>{first_name}</span></div>
                <div className={css.item}>Last name: <span>{last_name}</span></div>
                <div className={css.item}>Nick name: <span>{nick_name}</span></div>
                <div className={css.item}>Description: <span>{description}</span></div>
                <div className={css.item}>Position: <span>{position}</span></div>
            </div>
           <div className={css.buttons}>
               <Link to={`/companies`} state={user}>
                   <button className={css.button}>Show companies</button>
               </Link>
               <Link to={`update`}>
                   <button onClick={() => dispatch(userActions.setUserForUpdate({user}))} className={css.button}>Update
                       profile
                   </button>
               </Link>
           </div>
        </div>
    );
};

export {Profile};