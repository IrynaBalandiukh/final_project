import {joiResolver} from '@hookform/resolvers/joi';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import {authActions} from '../../redux';
import css from './RegistrationForm.module.css';
import {registrationValidator} from '../../validators';

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: joiResolver(registrationValidator),
        mode: "onTouched"
    });

    const submit = async (user) => {
        try {
            await dispatch(authActions.registration({user}))
            navigate('/profile')
        } catch (e) {
            console.log(e.message)
        }
    };

    return (
        <form className={css.form} onSubmit={handleSubmit(submit)}>
            <div className={css.inner}>
                <div className={css.items}>
                    <div><label><input type="text" placeholder={'Email'} {...register('email')}/></label></div>
                    {errors.email && <span>{errors.email.message}</span>}
                    <div><label><input type="password" placeholder={'Password'} {...register('password')}/></label>
                    </div>
                    {errors.password && <span>{errors.password.message}</span>}
                    <div><label><input type="text" placeholder={'First name'} {...register('first_name')}/></label>
                    </div>
                    {errors.first_name && <span>{errors.first_name.message}</span>}
                    <div><label><input type="text" placeholder={'Last name'} {...register('last_name')}/></label>
                    </div>
                    {errors.last_name && <span>{errors.last_name.message}</span>}
                </div>
                <div className={css.items}>
                    <div><label><input type="text" placeholder={'Nick name'} {...register('nick_name')}/></label>
                    </div>
                    {errors.nick_name && <span>{errors.nick_name.message}</span>}
                    <div><label><input type="text"
                                       placeholder={'Description'} {...register('description')}/></label></div>
                    {errors.description && <span>{errors.description.message}</span>}
                    <div><label><input type="text" placeholder={'Position'} {...register('position')}/></label></div>
                    {errors.position && <span>{errors.position.message}</span>}
                </div>
            </div>
            <button className={css.button}>Sign up</button>
        </form>
    );
};

export {RegistrationForm};