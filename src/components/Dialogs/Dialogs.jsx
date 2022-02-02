import s from './dialogs.module.sass'
import DialogsForm from './DialogsForm'
import DialogItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'


const Dialogs = (props) => {
    
    let dialogElems = props.dialogsData.map((dialog) => {
        return <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
    })

    let msgElems = props.msgData.map((msg) => (
        <Message key={msg.id} id={msg.id} msg={msg.msg} />
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

                    <DialogsForm sendMsg={props.sendMsg}/>

                </div>

            </div>

        </div>
    )
}

export default Dialogs