import {joiResolver} from '@hookform/resolvers/joi';
import jwtDecode from 'jwt-decode';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {useNavigate, useParams} from 'react-router-dom';

import {companyActions} from '../../redux';
import css from './CompanyForm.module.css';
import {companyValidator} from '../../validators';

const UpdateCompanyForm = () => {
    const {companyForUpdate} = useSelector(state => state.company);
    const {companyId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit, setValue,formState: {errors}} = useForm({
        resolver: joiResolver(companyValidator),
        mode: "onTouched"
    });

    const token = localStorage.getItem('token');
    const {id} = jwtDecode(token);

    useEffect(() => {
        const {name, address, serviceOfActivity, numberOfEmployees, description, type} = companyForUpdate;
        setValue('name', name)
        setValue('address', address)
        setValue('serviceOfActivity', serviceOfActivity)
        setValue('numberOfEmployees', numberOfEmployees)
        setValue('description', description)
        setValue('type', type)
    }, []);

    const submit = async (company) => {
        company['userId'] = id
        await dispatch(companyActions.updateById({id: companyId ,company: company}))
        navigate('/companies')
    };

    return (
        <form className={css.form} onSubmit={handleSubmit(submit)}>
            <div><label>Name: <input type="text" placeholder={'name'} {...register('name')}/></label></div>
            {errors.name && <span>{errors.name.message}</span>}
            <div><label>Address: <input type="text" placeholder={'address'} {...register('address')}/></label></div>
            {errors.address && <span>{errors.address.message}</span>}
            <div><label>Service of activity: <input type="text" placeholder={'serviceOfActivity'} {...register('serviceOfActivity')}/></label></div>
            {errors.serviceOfActivity && <span>{errors.serviceOfActivity.message}</span>}
            <div><label>Number of employees: <input type="text" placeholder={'numberOfEmployees'} {...register('numberOfEmployees')}/></label></div>
            {errors.numberOfEmployees && <span>{errors.numberOfEmployees.message}</span>}
            <div><label>Description: <input type="text" placeholder={'description'} {...register('description')}/></label></div>
            {errors.description && <span>{errors.description.message}</span>}
            <div><label>Type: <input type="text" placeholder={'type'} {...register('type')}/></label></div>
            {errors.type && <span>{errors.type.message}</span>}
            <button className={css.button}>Update company</button>
        </form>
    );
};

export {UpdateCompanyForm};