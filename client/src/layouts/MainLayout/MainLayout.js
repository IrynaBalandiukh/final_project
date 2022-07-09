import {Outlet} from 'react-router-dom';
import React from 'react';

import css from './MainLayout.module.css';

const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <h1>MyCompanies Web API</h1>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};