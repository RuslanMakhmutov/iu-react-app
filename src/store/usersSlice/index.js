import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
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
    }
})

export const { addUsers, deleteUserById} = usersSlice.actions
export default usersSlice.reducer