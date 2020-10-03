import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={s.wrapper}>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/photos'>Photos</NavLink>
            <NavLink to='/friends'>Friends</NavLink>
            <NavLink to='/more'>More</NavLink>
        </div>
    )
}

export default Navbar;