import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthFaceContainer from '../common/AuthFace/AuthFaceContainer';
import s from "./navbar.module.sass"
// import logo from '../../img/logo.svg'
import logo from '../../img/logo.png'

const Navbar = () => {
    return (
        <nav className={s.nav}>

            <div className={s.nav__logo}>
                <img src={logo} alt="img" />
            </div>

            <ul className={s.nav__list}>
                <li className={`${s.nav__list__item} ${s.active}`}>
                    <NavLink to='/home' activeClassName={s.active}>Home</NavLink>
                </li>
                <li className={`${s.nav__list__item} ${s.test}`}>
                    <NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink>
                </li>
                <li className={`${s.nav__list__item} ${s.test}`}>
                    <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
                </li>
            </ul>

            <AuthFaceContainer />

        </nav>
    )
}

export default Navbar;