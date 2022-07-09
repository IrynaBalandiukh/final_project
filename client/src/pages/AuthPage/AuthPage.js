import {Link} from 'react-router-dom';
import React from 'react';

import css from './AuthPage.module.css';

const AuthPage = () => {
    return (
        <div className={css.container}>
            <div className={css.text}>Welcome back! Log into your account or sign up</div>
            <div className={css.buttons}>
                <Link to='/login'>
                    <button className={css.button}>Log in</button>
                </Link>
                <Link to='/registration'>
                    <button className={css.button}>Sign up</button>
                </Link>
            </div>
        </div>
    );
};

export {AuthPage};