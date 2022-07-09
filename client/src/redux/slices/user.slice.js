import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {usersService} from '../../services';

const initialState = {
    users: [],
    user: null,
    userForUpdate: null
};

const getById = createAsyncThunk(
    'getById',
    async ({id}) => {
        const {data} = await usersService.getById(id);
        return data
    }
)

const getAll = createAsyncThunk(
    'getAll',
    async () => {
        const {data} = await usersService.getAll()
        return data
    }
)

const updateById = createAsyncThunk(
    'updateById',
    async ({id, user}) => {
        await usersService.updateById(id, user)
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUserForUpdate: (state, action) => {
            state.userForUpdate = action.payload.user
        }
    },
    extraReducers: {
        [getById.fulfilled]: (state, action) => {
            state.user = action.payload
        },
        [getAll.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [updateById.fulfilled]: (state) => {
            state.userForUpdate = false
        }
    }
});

const {reducer: userReducer, actions: {setUserForUpdate}} = userSlice;
const userActions = {getById, getAll, updateById, setUserForUpdate};
export {
    userReducer,
    userActions
}