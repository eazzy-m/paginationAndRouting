import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logOut }  from "../../redux/features/userLogin/userLoginSlice";
import { logOutRegister } from "../../redux/features/userRegistration/userRegistrationSlice";
import "./Header.scss";
import HeaderLink from "../../components/header-link/HeaderLink";

const Header = () => {
    // @ts-ignore
    const { isRegister } = useSelector(state => state.registration);
    // @ts-ignore
    const { isLogin } = useSelector(state => state.login);
    const dispatch = useDispatch();

    const exit = () => {
        dispatch(logOut());
        dispatch(logOutRegister());
    }

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    {!!(isRegister || isLogin)
                        ?
                        <>
                            <HeaderLink to={"/users"} children={"Users list"}/>
                            <HeaderLink to={"/about"} children={"About"}/>
                            <HeaderLink to={"/faq"} children={"FAQ"}/>
                        </>
                        :
                        <>
                            <HeaderLink to={"/about"} children={"About"}/>
                            <HeaderLink to={"/faq"} children={"FAQ"}/>
                        </>
                        }
                </ul>
            </nav>
            <nav className="nav auth">
                <ul className="nav-list">
                    {!!(isRegister || isLogin)
                        ?
                            <HeaderLink to={"/about"} children={"LogOut"} onClick={exit}/>
                        :
                        <>
                            <HeaderLink to={"/registration"} children={"Registration"}/>
                            <HeaderLink to={"/"} children={"Logged in?"} onClick={exit}/>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;