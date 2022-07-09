import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {companiesService} from '../../services';

const initialState = {
    companies: [],
    company: null,
    companyForUpdate: null
}

const getAll = createAsyncThunk(
    'getAll',
    async () => {
        const {data} = await companiesService.getAll()
        return data
    }
);

const getById = createAsyncThunk(
    'getById',
    async ({id}) => {
        const {data} = await companiesService.getById(id)
        return data
    }
);

const getByUserId = createAsyncThunk(
    'getByUserId',
    async ({userId}) => {
        const {data} = await companiesService.getByUserId(userId)
        return data
    }
)

const deleteById = createAsyncThunk(
    'deleteById',
    async ({id}) => {
        await companiesService.deleteById(id)
        return id
    }
);

const create = createAsyncThunk(
    'create',
    async ({company}) => {
        const {data} = await companiesService.create(company)
        return data
    }
);

const updateById = createAsyncThunk(
    'updateById',
    async ({id, company}) => {
        await companiesService.updateById(id, company)
    }
)


const companySlice = createSlice({
    name: 'Slice',
    initialState,
    reducers: {
        setCompanyForUpdate: (state, action) => {
            state.companyForUpdate = action.payload.company
        }

    },
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.companies = action.payload
        },
        [getById.fulfilled]: (state, action) => {
            state.company = action.payload
        },
        [deleteById.fulfilled]: (state, action) => {
            const index = state.companies.findIndex(company => company.id === action.payload)
            state.companies.splice(index, 1)
        },
        [updateById.fulfilled]: (state) => {
            state.companyForUpdate = false
        },
        [create.fulfilled]: (state, action) => {
            state.companies.push(action.payload)
        },
        [getByUserId.fulfilled]: (state, action) => {
            state.companies = action.payload
        }
    }
});

const {reducer: companyReducer, actions: {setCompanyForUpdate}} = companySlice;
const companyActions = {
    getAll,
    getById,
    deleteById,
    create,
    getByUserId,
    updateById,
    setCompanyForUpdate
}
export {
    companyReducer, companyActions
}