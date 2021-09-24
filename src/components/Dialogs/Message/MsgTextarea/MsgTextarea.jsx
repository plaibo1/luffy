import { addMsgCreator, updateMsgOnChangeCreator } from '../../../../Redux/dialogPage-reducer';
import s from '../../dialogs.module.sass';

const MsgTextArea = (props) => {

    const sendMsg = () => props.dispatch(addMsgCreator());

    const onMsgChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateMsgOnChangeCreator(text))
    }
    
    return (
        <div className={s.msgTextarea}>
            <textarea onChange={onMsgChange} value={props.msgInputValue}></textarea>
            <button onClick={sendMsg}>Send</button>
        </div>
    )
}


export default MsgTextArea