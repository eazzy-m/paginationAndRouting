import React from 'react';
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {

    const isLinkActive = (isActive) => isActive ? 'nav-item nav-item-active' : 'nav-item';

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li><NavLink
                        className={({ isActive }) => isLinkActive(isActive)}
                        to="/">Users list</NavLink></li>
                    <li className="nav-item"><NavLink
                        className={({ isActive }) => isLinkActive(isActive)}
                        to="/adding-user" >Adding user</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;