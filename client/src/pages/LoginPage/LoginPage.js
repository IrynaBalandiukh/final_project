import {Link} from 'react-router-dom';
import React from 'react';

import css from './LoginPage.module.css';
import {LoginForm} from '../../components';

const LoginPage = () => {
    return (
        <div>
            <div className={css.container}>
                <LoginForm/>
                <div className={css.container}>
                    <p>Don't have an account?</p>
                    <Link to='/registration'>Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export {LoginPage};