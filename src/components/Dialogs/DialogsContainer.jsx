import Dialogs from './Dialogs'
import { addMsgCreator } from '../../Redux/dialogPage-reducer';
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
        msgData: state.dialogPage.msgData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: (msg) => {
            dispatch(addMsgCreator(msg))
        }
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogContainer)