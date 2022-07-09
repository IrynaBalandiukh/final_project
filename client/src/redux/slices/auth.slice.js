import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {authService} from '../../services';

const initialState = {
    isAuth: null,
    authError: null
}

const registration = createAsyncThunk(
    'registration',
    async ({user}) => {
        const {data} = await authService.registration(user);
        return data
    }
)

const login = createAsyncThunk(
    'login',
    async ({user}) => {
        const {data} = await authService.login(user);
        return data;
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuth: state => {
            state.isAuth = true
        }

    },
    extraReducers: {
        [registration.fulfilled]: (state, action) => {
            state.isAuth = true;
            state.authErr = false;
            const {token} = action.payload;
            localStorage.setItem('token', token)
        },
        [registration.rejected]: (state) => {
            state.authErr = true
        },
        [login.fulfilled]: (state, action) => {
            state.isAuth = true;
            state.authErr = false;
            const {token} = action.payload;
            localStorage.setItem('token', token)
        },
        [login.rejected]: (state) => {
            state.authErr = true
        }
    }
});

const {reducer: authReducer, actions: {setAuth}} = authSlice;
const authActions = {
    registration,
    login,
    setAuth
};
export {
    authReducer, authActions
}