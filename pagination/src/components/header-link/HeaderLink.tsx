import * as React from 'react';
import {NavLink} from "react-router-dom";


interface IHeaderProps {
    to: string,
    onClick?: () => void,
    children: string,
}

const HeaderLink:React.FC<IHeaderProps> = ({ to, onClick, children}) => {

    const isLinkActive = (isActive:boolean):string => isActive ? 'nav-item nav-item-active' : 'nav-item';

    return (
            <NavLink
                className={({ isActive }) => isLinkActive(isActive)}
                to={to}
                onClick={onClick}
            >
                {children}
            </NavLink>
    );
}

export default HeaderLink;