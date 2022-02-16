import s from './userPage.module.sass';
import ava from '../../img/ava.png';
import { NavLink } from 'react-router-dom';

const User = ({user, followingInProcess, unfollow, follow}) => {

    return (
        <div className={s.user}>
            <NavLink to={`home/${user.id}`}>
                <div className={s.user__avatar}>
                    <img src={user.photos.small != null ? user.photos.small : ava} alt="img" />
                </div>
            </NavLink>
            <div>
                <NavLink to={`home/${user.id}`}>
                    <div className={s.user__name}>
                        {user.name}
                    </div>
                </NavLink>
                <div className={s.user__status}>
                    {user.status || 'none'}
                </div>
            </div>

            <div className={s.user__button}>
                {
                    user.followed
                        ? <button disabled={followingInProcess.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id);
                        }

                        }>Unfollow</button>
                        :
                        <button disabled={followingInProcess.some(id => id === user.id)} onClick={() => {
                            follow(user.id);
                        }

                        }>Follow</button>
                }
            </div>


        </div>
    )

}

export default User;