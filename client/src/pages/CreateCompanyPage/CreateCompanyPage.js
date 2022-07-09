import React from 'react';

import {CompanyForm} from '../../components';
import css from './CreateCompanyPage.module.css';

const CreateCompanyPage = () => {
    return (
        <div className={css.container}>
            <CompanyForm/>
        </div>
    );
};

export {CreateCompanyPage};