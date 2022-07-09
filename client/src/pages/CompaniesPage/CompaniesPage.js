import jwtDecode from 'jwt-decode';
import {Link, useNavigate} from 'react-router-dom';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Company} from '../../components';
import {companyActions} from '../../redux';
import css from './CompaniesPage.module.css';

const CompaniesPage = () => {
    const {companies} = useSelector(state => state.company);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const {id} = jwtDecode(token);

    useEffect(() => {
        dispatch(companyActions.getByUserId({userId: id}))
    }, []);

    const logOut = () => {
        localStorage.clear()
        navigate('/auth')
    };

    return (<div className={css.wrapper}>
            <div className={css.container}>
                <p>All companies</p>
                <div>
                    <button className={css.button} onClick={() => navigate('/profile')}>Back to profile</button>
                    <button className={css.button} onClick={() => logOut()}>Log out</button>
                </div>
            </div>
            <div>
                <Link to={'/companies/create'}>Create new company</Link>
                {companies && companies.map(company => <Company key={company.id} company={company}/>)}
            </div>
        </div>);
};

export {CompaniesPage};