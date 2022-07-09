import React from 'react';
import {useDispatch} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';

import {companyActions} from '../../redux';
import css from './CompanyDetail.module.css';

const CompanyDetail = ({company}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id, name, address, serviceOfActivity, numberOfEmployees, description, type} = company;

    const deleteById = () => {
        dispatch(companyActions.deleteById({id}))
        navigate('/companies')
    };

    return (
        <div className={css.container}>
            <div>
                <div className={css.item}>Name: <span>{name}</span></div>
                <div className={css.item}>Address : <span>{address}</span></div>
                <div className={css.item}>Service of activity: <span>{serviceOfActivity}</span></div>
                <div className={css.item}>Number of employees: <span>{numberOfEmployees}</span></div>
                <div className={css.item}>Description: <span>{description}</span></div>
                <div className={css.item}>Type: <span>{type}</span></div>
                <div className={css.buttons}>
                    <button className={css.button} onClick={deleteById}>delete</button>
                    <Link to={'update'}>
                        <button className={css.button} onClick={() => dispatch(companyActions.setCompanyForUpdate({company}))}>update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export {CompanyDetail};