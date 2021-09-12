import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./navbar.module.sass"

const Navbar = () => {
    return (
        <nav className={s.nav}>

            <div className={s.nav__logo}>
                <img src="https://image.flaticon.com/icons/png/512/3845/3845871.png" alt="img" />
            </div>

            <ul className={s.nav__list}>
                <li className={`${s.nav__list__item} ${s.active}`}>
                    <NavLink to='/home' activeClassName={s.active}>Home</NavLink>
                </li>
                <li className={`${s.nav__list__item} ${s.test}`}>
                    <NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink>
                </li>
                <li className={s.nav__list__item}>
                    <a href="">Wall</a>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar;