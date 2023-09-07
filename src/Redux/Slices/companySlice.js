import { createSlice } from "@reduxjs/toolkit";
import companies from '../../fakeDb/company.json';

const companySlice = createSlice({
    name: 'company',
    initialState: {
        company: companies
    },


    reducers: {
        addCompany: (state, action) => {
            // const newState = [ action.payload];
            state.company.push(action.payload)
        }
    }

})
export const { addCompany } = companySlice.actions;

export default companySlice.reducer;