import React from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut }  from "../../features/userLogin/userLoginSlice";
import { logOutRegister } from "../../features/userRegistration/userRegistrationSlice";
import "./Header.scss";

const Header = () => {

    const { isRegister } = useSelector(state => state.registration);
    const { isLogin } = useSelector(state => state.login);
    const dispatch = useDispatch();

    const isLinkActive = (isActive) => isActive ? 'nav-item nav-item-active' : 'nav-item';

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    {!!(isRegister || isLogin)
                        ?
                        <>
                            <li className="nav-item"><NavLink
                                className={({ isActive }) => isLinkActive(isActive)}
                                to="/users">Users list</NavLink></li>
                            <li className="nav-item"><NavLink
                                className={({ isActive }) => isLinkActive(isActive)}
                                to="/about" >About</NavLink></li>
                            <li className="nav-item"><NavLink
                                className={({ isActive }) => isLinkActive(isActive)}
                                to="/faq" >FAQ</NavLink></li>
                        </>
                        :
                        <>
                        <li className="nav-item"><NavLink
                        className={({ isActive }) => isLinkActive(isActive)}
                        to="/about" >About</NavLink></li>
                        <li className="nav-item"><NavLink
                        className={({ isActive }) => isLinkActive(isActive)}
                        to="/faq" >FAQ</NavLink></li>
                        </>
                        }
                </ul>
            </nav>
            <nav className="nav auth">
                <ul className="nav-list">
                    {!!(isRegister || isLogin)
                        ?
                        <li className="nav-item">
                            <NavLink
                                onClick={() => {
                                    dispatch(logOut());
                                    dispatch(logOutRegister());
                                }}
                                className="nav-item"
                                to="/about">LogOut
                            </NavLink>
                        </li>
                        :
                        <>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => isLinkActive(isActive)}
                                    to="/registration">Registration
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => isLinkActive(isActive)}
                                    onClick={() => {
                                        dispatch(logOut());
                                        dispatch(logOutRegister());
                                    }}
                                    to="/">Logged in?
                                </NavLink>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;