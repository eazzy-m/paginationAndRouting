import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import { handlerLogin } from "../../Api/api";

const initialState = {
    isLogin: false
};

export const loginServer = createAsyncThunk('usersList/registerNewUser', handlerLogin);

const userLoginSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers: {
        [loginServer.pending]: (state) => {
            state.isLoading = true;
        },
        [loginServer.fulfilled]: (state) => {
            state.isLoading = false;
            state.isLogin = true;
        },
        [loginServer.rejected]: (state) => {
            state.isLoading = false;
        }
    }
});

export default userLoginSlice.reducer;