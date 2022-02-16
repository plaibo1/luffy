import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { addPost, likeUp, 
    setUserProfile, getProfile, getStatus, updateStatus} from '../../Redux/homePage-reducer';
import Home from './Home.jsx';


class HomeContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId
            if(!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }


    render() {
        return(
            <Home {...this.props} userProfile={this.props.userProfile} 
                getStatus={this.props.getStatus} updateStatus={this.props.updateStatus}  />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        friends: state.homePage.friends,
        textareaValue: state.homePage.textareaValue,
        postData: state.homePage.postData,
        postComments: state.homePage.postComments,
        commentTextareaValue: state.homePage.commentTextareaValue,
        userProfile: state.homePage.userProfile,
        status: state.homePage.status,
        userId: state.auth.userId
    }
}




export default compose(
    connect(mapStateToProps, {
        addPost, likeUp, 
        setUserProfile, getProfile, getStatus, updateStatus
    }),
    withRouter
)(HomeContainer)