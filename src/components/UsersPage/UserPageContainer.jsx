import { connect } from "react-redux";
import React from 'react';

import { follow, setUsers, unfollow, setCurrentPage, setUsersTotalCount, 
    toggleIsFetching, toggleFollowingInProcess, getUsers} from "../../Redux/usersPage-reducer";
import UserPage from './UserPage';
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";




class UsersPageContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>

            { this.props.isFetching ? <Preloader /> : null}

            <UserPage 
                onPageChanged = {this.onPageChanged}
                users = {this.props.users}
                totalPageCount = {this.props.totalPageCount}
                pageSize = {this.props.pageSize}
                unfollow = {this.props.unfollow}
                follow = {this.props.follow}
                currentPage = {this.props.currentPage}
                toggleFollowingInProcess = {this.props.toggleFollowingInProcess}
                followingInProcess = {this.props.followingInProcess}

                authUserId = {this.props.authUserId}
            />

        </>
    }
}

const mapStateToProps = (state) => {
    return {
       users: state.userPage.users,
       pageSize: state.userPage.pageSize,
       totalPageCount: state.userPage.totalPageCount,
       currentPage: state.userPage.currentPage,
       isFetching: state.userPage.isFetching,
       followingInProcess: state.userPage.followingInProcess,
       

       authUserId: state.auth.userId,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {

//         follow: (userId) => {
//             dispatch(follow(userId))
//         },
    
//         unfollow: (userId) => {
//             dispatch(unfollow(userId))
//         },

//         setUsers: (users) => {
//             dispatch(setUsers(users))
//         },

//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPage(pageNumber))
//         },

//         setUsersTotalCount: (totalCount) => {
//             dispatch(setUsersTotalCount(totalCount))
//         },

//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching))
//         }

//     }
// }




export default compose(

    connect(mapStateToProps, 
        {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, 
            toggleIsFetching, toggleFollowingInProcess, getUsers}),

    withAuthRedirect

)(UsersPageContainer)