import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {newUserRegistration} from "../../api/api";

const initialState = {
    isLoading: true,
    isRegister: ''
};

export const registerNewUser = createAsyncThunk('usersList/registerNewUser', newUserRegistration);

const userRegistrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        logOutRegister: (state) => {
            state.isRegister = '';
        }
    },
    extraReducers: {
        [registerNewUser.pending]: (state) => {
            state.isLoading = true;
            state.isRegister = false;
        },
        [registerNewUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isRegister = action.payload;
        },
        [registerNewUser.rejected]: (state) => {
            state.isRegister = false;
            state.isLoading = false;
        }
    }
});


export const { logOutRegister } = userRegistrationSlice.actions
export default userRegistrationSlice.reducer;