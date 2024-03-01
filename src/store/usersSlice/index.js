import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    isLoading: false,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: (state, action) => {
            state.list = action.payload;
        },
        deleteUserById: (state, action) => {
            const {id} = action.payload
            state.list = state.list.filter(user => user.id !== id)
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
    }
})

export const { addUsers, deleteUserById, setIsLoading} = usersSlice.actions
export default usersSlice.reducer