import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import { handlerLogin } from "../../../api/api";

const initialState = {
    isLoading: true,
    isLogin: ''
};

export const loginServer = createAsyncThunk('usersList/registerNewUser', handlerLogin);

const userLoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logOut: (state) => {
            state.isLogin = '';
        }
    },
    extraReducers: {
        [loginServer.pending]: (state) => {
            state.isLogin = false;
            state.isLoading = true;
        },
        [loginServer.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isLogin = action.payload;
        },
        [loginServer.rejected]: (state) => {
            state.isLoading = false;
        }
    }
});


export const { logOut } = userLoginSlice.actions;
export default userLoginSlice.reducer;