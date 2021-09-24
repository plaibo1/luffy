import s from './dialogs.module.sass'
import DialogItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import MsgTextArea from './Message/MsgTextarea/MsgTextarea'


const Dialogs = (props) => {
    
    let dialogElems = props.state.dialogsData.map((dialog) => {
        return <DialogItem id={dialog.id} name={dialog.name} />
    })


    let msgElems = props.state.msgData.map((msg) => (
        <Message id={msg.id} msg={msg.msg} />
    ))

    return(
        <div className={s.dialogs}>
            <h1 className={s.dialogs__title}>Dialogs</h1>

            <div className={s.dialogs__wrapper}>

                <div className="dialogsItems">
                    {dialogElems}
                </div>

                <div className="messages">
                    {msgElems}
                    <MsgTextArea msgInputValue={props.state.msgInputValue} dispatch={props.dispatch}/>
                </div>

            </div>

        </div>
    )
}

export default Dialogs