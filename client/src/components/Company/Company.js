import {Link, Outlet} from 'react-router-dom';
import React from 'react';

import css from './Company.module.css';

const Company = ({company}) => {
    const {id, name, description} = company;

    return (
        <div>
            <div className={css.container}>
                <div className={css.item}>Name: <span>{name}</span></div>
                <div className={css.item}>Description: <span>{description}</span></div>
                <Link className={css.redirect} to={`${id}`} state={company}>Show details</Link>
            </div>
            <Outlet/>
        </div>
    );
};

export {Company};