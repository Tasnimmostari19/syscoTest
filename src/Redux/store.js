import { configureStore } from "@reduxjs/toolkit";
import CompanySlice from "./Slices/companySlice";

export const store = configureStore({
    reducer: {
        company: CompanySlice
    }
})