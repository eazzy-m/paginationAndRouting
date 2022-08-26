import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersList/usersListSlice";
import registrationReducer from "../features/userRegistration/userRegistrationSlice"
import userLoginReducer from "../features/userLogin/userLoginSlice"

export const store = configureStore({
    reducer: {
        users: usersReducer,
        registration: registrationReducer,
        login: userLoginReducer
    }
});

