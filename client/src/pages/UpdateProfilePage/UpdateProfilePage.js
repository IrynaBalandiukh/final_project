import React from 'react';

import css from './UpdateProfile.module.css';
import {UpdateProfileForm} from '../../components';

const UpdateProfilePage = () => {
    return (
        <div className={css.container}>
            <UpdateProfileForm/>
        </div>
    );
};

export {UpdateProfilePage};