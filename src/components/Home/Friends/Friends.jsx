import { NavLink } from 'react-router-dom'
import s from './friends.module.sass'



const Frineds = (props) => {

    const friendList = props.friends.map((f) => {
        return (
            <NavLink to={`/home/frineds/${f.id}`} key={f.id} className={s.friend}>
                <div className={s.friend__img}> <img src={f.avatar} alt="img" /> </div>
                <div className={s.friend__name}> {f.name} </div>
            </NavLink>
        )
    })

    return (
        <div className={s.friendWrapper}>
            {friendList}
        </div>
    )
}

export default Frineds;