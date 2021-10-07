import s from './userPage.module.sass';

const userPage = (props) => {

    const user = props.users.map(u => {
        return (
            <div className={s.user}>
                <div className={s.user__name}>
                    {u.fullName}
                </div>
                <div className={s.user__status}>
                    {u.status}
                </div>
                <div className={s.user__status}>
                    {u.location.city}
                </div>
                <div className={s.button}>
                    {
                    u.following 
                        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> 
                        : <button onClick={() => props.follow(u.id)}>Follow</button>
                    }
                </div>
            </div>
        )
    })

    return (
        <div className={s.userWapper}>
            {user}
        </div>
    )
}

export default userPage;