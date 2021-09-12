import s from '../dialogs.module.sass'

const Message = (props) => {
    return <div className={s.message}>{props.msg}</div>
}


export default Message