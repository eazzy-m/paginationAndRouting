import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {getUsersFromServer} from "../../Api/api";

const initialState = {
    users: [],
    isLoading: true
};

//export const getLoginFromServer = createAsyncThunk('usersList/getLoginFromServer', handlerLogin);

//export const registerNewUser = createAsyncThunk('usersList/registerNewUser', newUserRegistration)

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

//export const {loggedIn, loggedOut} = usersListSlice.actions
export default usersListSlice.reducer;
