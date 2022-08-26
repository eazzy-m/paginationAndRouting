import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {newUserRegistration} from "../../../api/api";

const initialState = {
    isLoading: true,
    isRegister: false
};

export const registerNewUser = createAsyncThunk('usersList/registerNewUser', newUserRegistration);

const userRegistrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        logOutRegister: (state) => {
            state.isRegister = false;
        }
    },
    extraReducers: {
        [registerNewUser.pending]: (state) => {
            state.isLoading = true;
            state.isRegister = false;
        },
        [registerNewUser.fulfilled]: (state, action) => {
            console.log('everything is fine')
            state.isLoading = false;
            state.isRegister = action.payload;
        },
        [registerNewUser.rejected]: (state) => {
            console.log('reject')
            state.isRegister = false;
            state.isLoading = false;
        }
    }
});


export const { logOutRegister } = userRegistrationSlice.actions;
export default userRegistrationSlice.reducer;