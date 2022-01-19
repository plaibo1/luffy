import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addPost, likeUp, updateCommentOnChange, updatePostOnChange, setUserProfile, getProfile } from '../../Redux/homePage-reducer';
import Home from './Home.jsx';


class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
    }


    render() {
        return(
            <Home {...this.props} userProfile={this.props.userProfile}/>
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
    }
}




export default compose(
    connect(mapStateToProps, {
        addPost, updatePostOnChange, likeUp, updateCommentOnChange, setUserProfile, getProfile  
    }),
    withRouter,
    withAuthRedirect
)(HomeContainer)