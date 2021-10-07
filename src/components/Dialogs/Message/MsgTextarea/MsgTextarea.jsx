import s from '../../dialogs.module.sass';

const MsgTextArea = (props) => {

    const onSendMsg = () => props.sendMsg();

    const updateOnMsgChange = (e) => {
        let text = e.target.value;
        props.onMsgChange(text)
    }
    
    return (
        <div className={s.msgTextarea}>
            <textarea onChange={updateOnMsgChange} value={props.msgInputValue}></textarea>
            <button onClick={onSendMsg}>Send</button>
        </div>
    )
}


export default MsgTextArea