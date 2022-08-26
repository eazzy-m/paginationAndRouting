import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {getUsersFromServer} from "../../../api/api";

const initialState = {
    users: [],
    isLoading: true
};

export const getUsers = createAsyncThunk('usersList/getUsers ', getUsersFromServer);

const usersListSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.isLoading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        },
        [getUsers.rejected]: (state) => {
            state.isLoading = false;
        }
    }
});

export default usersListSlice.reducer;
