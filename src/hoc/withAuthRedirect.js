import React  from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized
    }
}

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends Component {
        render() {
            if (this.props.isAuthorized === false) return <Redirect to='/login' />

            return <Component { ...this.props } />
        }
    }

    let connectedComponent = connect(mapStateToProps)(RedirectComponent)

    return connectedComponent

};


