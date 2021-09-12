import { NavLink } from 'react-router-dom'
import s from '../dialogs.module.sass'

const DialogsItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`} >
                <div>
                    <img src="https://sun1-94.userapi.com/impf/X5J-GAYPHNJGpCKHQvBrVtgmRbpjsr1bayjeyA/hJ4N2Rxbyx4.jpg?size=821x821&quality=96&sign=96722f513232da8acbbb5a6a0f2b261e&type=album" width='30px' alt="img" />
                </div>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogsItem;