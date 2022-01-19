import React from 'react';
import { connect } from 'react-redux';
import { authApiRequest } from '../../../Redux/auth-reducer'
import AuthFace from './AuthFace';

class AuthFaceWrapper extends React.Component {

    componentDidMount() {
        this.props.authApiRequest()
    }

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
   authApiRequest
})(AuthFaceWrapper)

export default AuthFaceContainer;


