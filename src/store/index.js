import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './usersSlice/index'

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    devTools: true,
})