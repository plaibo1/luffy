import React from 'react';
import { connect } from 'react-redux';
import AuthFace from './AuthFace';
import {logout} from '../../../Redux/auth-reducer'
class AuthFaceWrapper extends React.Component {

    render() {
        return (
            <AuthFace 
                {...this.props} 
                isAuthorized={this.props.isAuthorized}
                login={this.props.login}
                userId={this.props.userId}
            />
        )
    }
}

const MapStateToProps = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized,
        login: state.auth.login,
        userId: state.auth.userId,
    }
}

const AuthFaceContainer = connect(MapStateToProps, {
 logout
})(AuthFaceWrapper)

export default AuthFaceContainer;


