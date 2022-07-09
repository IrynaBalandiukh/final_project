import {joiResolver} from '@hookform/resolvers/joi';
import jwtDecode from 'jwt-decode';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import css from './UpdateUserForm.module.css';
import {userActions} from '../../redux';
import {registrationValidator} from "../../validators";

const UpdateProfileForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit, setValue, formState: {errors}} = useForm({
        resolver: joiResolver(registrationValidator),
        mode: "onTouched"
    });
    const {userForUpdate} = useSelector(state => state.user);

    const token = localStorage.getItem('token');
    const {id} = jwtDecode(token);

    useEffect(() => {
        const {first_name, last_name, nick_name, description, position} = userForUpdate
        setValue('first_name', first_name)
        setValue('last_name', last_name)
        setValue('nick_name', nick_name)
        setValue('description', description)
        setValue('position', position)
    }, []);

    const submit = async (user) => {
        try {
            await dispatch(userActions.updateById({id: id, user}))
            navigate('/profile')
        } catch (e) {
            console.error(e.message)
        }
    }
    return (
        <form className={css.form} onSubmit={handleSubmit(submit)}>
            <div><label>First name: <input type="text" placeholder={'first_name'} {...register('first_name')}/></label>
            </div>
            {errors.first_name && <span>{errors.first_name.message}</span>}
            <div><label>Last name: <input type="text" placeholder={'last_name'} {...register('last_name')}/></label>
            </div>
            {errors.last_name && <span>{errors.last_name.message}</span>}
            <div><label>Nickname: <input type="text" placeholder={'nick_name'} {...register('nick_name')}/></label>
            </div>
            {errors.nick_name && <span>{errors.nick_name.message}</span>}
            <div><label>Description: <input type="text"
                                            placeholder={'description'} {...register('description')}/></label></div>
            {errors.description && <span>{errors.description.message}</span>}
            <div><label>Position: <input type="text" placeholder={'position'} {...register('position')}/></label></div>
            {errors.position && <span>{errors.position.message}</span>}
            <button className={css.button}>update info</button>
        </form>
    );
};

export {UpdateProfileForm};