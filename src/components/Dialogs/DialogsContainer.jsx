import Dialogs from './Dialogs'
import { addMsgCreator, updateMsgOnChangeCreator } from '../../Redux/dialogPage-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        msgData: state.dialogPage.msgData,
        msgInputValue: state.dialogPage.msgInputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: () => {
            dispatch(addMsgCreator())
        },
        onMsgChange: (text) => {
            dispatch(updateMsgOnChangeCreator(text))
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogContainer