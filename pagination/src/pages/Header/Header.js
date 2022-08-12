import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {


    const [isLogin, setIsLogin] = useState(false)
    const isLinkActive = (isActive) => isActive ? 'nav-item nav-item-active' : 'nav-item';

    const logOut = () => {
        setIsLogin(!isLogin)
    }

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    {isLogin
                        ?
                        <>
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
                            to="/">Users list</NavLink></li>
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
                    {isLogin ?
                        <>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => isLinkActive(isActive)}
                                    to="/registration" >Registration
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => isLinkActive(isActive)}
                                    onClick={logOut}
                                    to="/sign-in">Logged in?
                                </NavLink>
                            </li>
                        </>
                        :
                        <li className="nav-item">
                            <NavLink
                                onClick={logOut}
                                className="nav-item"
                                to="/about">LogOut
                            </NavLink>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;