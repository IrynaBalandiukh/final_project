import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {authReducer} from "./slices/auth.slice";
import {userReducer} from "./slices/user.slice";
import {companyReducer} from "./slices/company.slice";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    company: companyReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;