
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch} from "react-redux";

import UsersList from "../UsersList/UsersList";
import Header from "../Header/Header";
import Registration from "../Registration/Registration";
import About from "../About/About";
import Faq from "../Faq/Faq";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import ProtectedRoute from "../../router/ProtectedRoute";
import { registerNewUser } from "../../features/userRegistration/userRegistrationSlice";
import { loginServer }  from "../../features/userLogin/userLoginSlice";

import "./App.scss";
import {AsyncThunkAction} from "@reduxjs/toolkit";
const App: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="App">
            <BrowserRouter >
                <Header/>
                <Routes>
                    <Route element={<ProtectedRoute/>}>
                        <Route path="/users" element={ <UsersList />}/>
                    </Route>
                    <Route path="/registration" element={<Registration postNewUser={(data) => dispatch<any>(registerNewUser(data))}/>}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/faq" element={<Faq />}/>
                    <Route path="/" element={<Login login={(data) => dispatch<any>(loginServer(data))}/>}></Route>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>

        </div>
  );
};

export default App;
