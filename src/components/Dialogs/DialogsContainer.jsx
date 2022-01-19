import Dialogs from './Dialogs'
import { addMsgCreator, updateMsgOnChangeCreator } from '../../Redux/dialogPage-reducer';
import { connect } from 'react-redux';
import React from 'react';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class DialogContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <Dialogs {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        msgData: state.dialogPage.msgData,
        msgInputValue: state.dialogPage.msgInputValue,
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



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogContainer)