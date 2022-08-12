import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {newUserRegistration} from "../../Api/api";

const initialState = {
    isRegister: false
};

export const registerNewUser = createAsyncThunk('usersList/registerNewUser', newUserRegistration);

const userRegistrationSlice = createSlice({
    name: 'registration',
    initialState,
    extraReducers: {
        [registerNewUser.pending]: (state) => {
            state.isRegister = false;
        },
        [registerNewUser.fulfilled]: (state) => {
            state.isRegister = true;
        },
        [registerNewUser.rejected]: (state) => {
            state.isRegister = false;
        }
    }
});

export default userRegistrationSlice.reducer;