import React from 'react';

import css from './UpdateCompany.module.css';
import {UpdateCompanyForm} from '../../components';

const UpdateCompanyPage = () => {
    return (
        <div className={css.container}>
            <UpdateCompanyForm/>
        </div>
    );
};

export {UpdateCompanyPage};