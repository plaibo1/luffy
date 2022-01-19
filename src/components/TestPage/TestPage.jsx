import React from "react";
import s from './testPage.module.sass';

const TestPage = (props) => {

    return (
        props.users.map(u => {
            return (
                <div className={s.user} key={u.id}>
                    <div className={s.user__name}>{u.name}</div>
                </div>
            )
        })

    )
}

export default TestPage;