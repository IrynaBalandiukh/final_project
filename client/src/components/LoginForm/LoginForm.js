import {joiResolver} from '@hookform/resolvers/joi';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import {authActions} from '../../redux';
import css from './LoginForm.module.css';
import {loginValidator} from '../../validators';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: joiResolver(loginValidator),
        mode: "onTouched"
    });

    const submit = async (user) => {
        try {
            await dispatch(authActions.login({user}))
            navigate('/profile')
        } catch (e) {
            console.error(e.message)
        }
    };

    return (
        <form className={css.form} onSubmit={handleSubmit(submit)}>
            <div className={css.inner}>
                <div><label><input type="text" placeholder={'Email'} {...register('email')}/></label></div>
                {errors.email && <span>{errors.email.message}</span>}
                <div><label><input type="password" placeholder={'Password'} {...register('password')}/></label></div>
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button className={css.button}>Log in</button>
        </form>
    );
};

export {LoginForm};