import {joiResolver} from '@hookform/resolvers/joi';
import jwtDecode from 'jwt-decode';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import {companyActions} from '../../redux';
import css from './CompanyForm.module.css';
import {companyValidator} from '../../validators';

const CompanyForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: joiResolver(companyValidator),
        mode: "onTouched"
    });

    const token = localStorage.getItem('token');
    const {id} = jwtDecode(token);

    const submit = async (company) => {
        company['userId'] = id
        await dispatch(companyActions.create({company: company}))
        navigate('/companies')
    };

    return (
        <form className={css.form} onSubmit={handleSubmit(submit)}>
            <div><label><input type="text" placeholder={'Name'} {...register('name')}/></label></div>
            {errors.name && <span>{errors.name.message}</span>}
            <div><label><input type="text" placeholder={'Address'} {...register('address')}/></label></div>
            {errors.address && <span>{errors.address.message}</span>}
            <div><label><input type="text" placeholder={'Service of activity'} {...register('serviceOfActivity')}/></label>
            </div>
            {errors.serviceOfActivity && <span>{errors.serviceOfActivity.message}</span>}
            <div><label><input type="text" placeholder={'Number of employees'} {...register('numberOfEmployees')}/></label>
            </div>
            {errors.numberOfEmployees && <span>{errors.numberOfEmployees.message}</span>}
            <div><label><input type="text" placeholder={'Description'} {...register('description')}/></label></div>
            {errors.description && <span>{errors.description.message}</span>}
            <div><label><input type="text" placeholder={'Type'} {...register('type')}/></label></div>
            {errors.type && <span>{errors.type.message}</span>}
            <button className={css.button}>Create company</button>
        </form>
    );
};

export {CompanyForm};