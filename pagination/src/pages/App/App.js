
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import UsersList from "../UsersList/UsersList";
import Header from "../Header/Header";
import Registration from "../Registration/Registration";
import About from "../About/About";
import Faq from "../Faq/Faq";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login"
import Loader from "../Loader/Loader";

import { getUsers } from "../../features/usersList/usersListSlice";
import { registerNewUser } from "../../features/userRegistration/userRegistrationSlice"
import { loginServer }  from "../../features/userLogin/userLoginSlice"

const App = () => {

    const { isLoading } = useSelector((state) => state.users);
    const dispatch = useDispatch();


    useEffect(() => {
        setTimeout(() => {
            dispatch(getUsers());
        }, 3000);
    }, []);

  return (
    <div className="App">
        <BrowserRouter >
            <Header/>
            <Routes>

                <Route path="/" element={isLoading ? <Loader/> : <UsersList />}/>
                <Route path="/registration" element={<Registration postNewUser={(data) => dispatch(registerNewUser(data))}/>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/faq" element={<Faq />}/>
                <Route path="/sign-in" element={<Login login={(data) => dispatch(loginServer(data))}/>}></Route>
                <Route path="*" element={<NotFound />}/>

            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
