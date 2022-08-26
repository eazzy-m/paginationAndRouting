
import {lazy, FC, Suspense} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch} from "react-redux";

import "./App.scss";
import Header from "../Header/Header";
import Registration from "../Registration/Registration";
import About from "../About/About";
import Faq from "../Faq/Faq";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import ProtectedRoute from "../../router/ProtectedRoute";
import Loader from "../Loader/Loader";
import { registerNewUser } from "../../redux/features/userRegistration/userRegistrationSlice";
import { loginServer }  from "../../redux/features/userLogin/userLoginSlice";

const UsersList = lazy(() => import("../UsersList/UsersList")) ;

//import {AsyncThunkAction} from "@reduxjs/toolkit";
const App: FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="App">
            <BrowserRouter >
                <Header/>
                <Routes>
                    <Route element={<ProtectedRoute/>}>
                        <Route path="/users" element={
                            <Suspense fallback={<Loader/>}>
                                <UsersList />
                            </Suspense>
                        }/>
                    </Route>
                    <Route path="/registration" element={<Registration postNewUser={(data) => dispatch<any>(registerNewUser(data))}/>}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/faq" element={<Faq title={"FAQ"}/>}/>
                    <Route path="/" element={<Login login={(data) => dispatch<any>(loginServer(data))}/>}></Route>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>

        </div>
  );
};

export default App;
