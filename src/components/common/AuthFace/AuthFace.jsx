import { NavLink } from 'react-router-dom';
import s from './authFace.module.sass';

const AuthFace = (props) => {

    const onLogout = () => props.logout()

    return (
        <>
            {(props.isAuthorized) ? 
            <>
                <NavLink className={s.navlink} to={`/home/${props.userId}`}>{props.login}</NavLink>
                <span className={s.logout} onClick={onLogout}>logout</span>
            </>
                : <NavLink to='/login' className={s.navlink}>log in</NavLink>}
        </>
    )
}

export default AuthFace;