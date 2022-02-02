import s from './userPage.module.sass';
import ava from '../../img/ava.png';
import { NavLink } from 'react-router-dom';

const UserPage = (props) => {

    const user = props.users.map(u => {
        return (
            <div className={s.user} key={u.id}>
                <NavLink to={`home/${u.id}`}>
                    <div className={s.user__avatar}>
                        <img src={u.photos.small != null ?  u.photos.small : ava} alt="img" />
                    </div>
                </NavLink>
                <div>
                    <NavLink to={`home/${u.id}`}>
                        <div className={s.user__name}>
                            {u.name}
                        </div>
                    </NavLink>
                    <div className={s.user__status}>
                        {u.status || 'none'}
                    </div>
                </div>

                <div className={s.user__button}>
                    {        
                    u.followed 
                        ? <button disabled={props.followingInProcess.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id);
                        }
                            
                        }>Unfollow</button> 
                        : 
                        <button disabled={props.followingInProcess.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id);
                        }
                        
                        }>Follow</button>
                    }
                    </div>
                

            </div>
        )
    })

    let totalPage = Math.ceil(props.totalPageCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
    }

    return (
        <div className={s.userWapper}>

            <div className={s.pagination}>
                {
                    pages.map(p => {
                        return <span
                            key={p}
                            className={(props.currentPage === p && s.selectedActive).toString()}
                            onClick={() => {props.onPageChanged(p)}}
                        >{p}</span>
                    })
                }
            </div>

            {user}
        </div>
    )
}

export default UserPage;