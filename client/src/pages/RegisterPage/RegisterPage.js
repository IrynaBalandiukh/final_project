import {Link} from 'react-router-dom';
import React from 'react';

import css from './RegisterPage.module.css';
import {RegistrationForm} from '../../components';

const RegisterPage = () => {
    return (
        <div className={css.container}>
            <RegistrationForm/>
            <div className={css.container}>
                <p>Already have an account?</p>
                <Link to='/login'>LogIn</Link>
            </div>
        </div>
    );
};

export {RegisterPage};