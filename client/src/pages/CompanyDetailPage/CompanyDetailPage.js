import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';

import {companiesService} from '../../services';
import {CompanyDetail} from '../../components';
import css from './CompanyDetailPage.module.css';

const CompanyDetailPage = () => {
    const {companyId} = useParams();
    const [company, setCompany] = useState(null);
    const navigate = useNavigate();
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setCompany(state)
        } else {
            companiesService.getById(companyId).then(({data}) => setCompany(data))
        }
    }, []);

    const logOut = () => {
        localStorage.clear()
        navigate('/auth')
    };

    return (
        <div>
            <div className={css.container}>
                <button className={css.button} onClick={() => navigate('/companies')}>Back to companies</button>
                <button className={css.button} onClick={() => logOut()}>Log out</button>
            </div>
            {company && <CompanyDetail company={company}/>}
        </div>
    );
};

export {CompanyDetailPage};