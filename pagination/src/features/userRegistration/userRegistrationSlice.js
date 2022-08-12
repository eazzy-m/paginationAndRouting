import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {newUserRegistration} from "../../api/api";

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
        [registerNewUser.fulfilled]: (state, action) => {
            state.isRegister = action.payload;
            console.log(state.isRegister)
        },
        [registerNewUser.rejected]: (state) => {
            state.isRegister = false;
        }
    }
});

export default userRegistrationSlice.reducer;