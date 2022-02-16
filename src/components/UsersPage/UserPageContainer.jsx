import { connect } from "react-redux";
import React from 'react';

import { follow, setUsers, unfollow, setCurrentPage, setUsersTotalCount,
    toggleIsFetching, toggleFollowingInProcess, getUsers, setPortionPagination} from "../../Redux/usersPage-reducer";
import UserPage from './UserPage';
import Preloader from "../common/Preloader/Preloader";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

import { getCurrentPage, getFollowingInProcess, getIsFetching, 
    getPageSize, getPortionPagination, getPortionSize, 
    getTotalPageCount, getUsersSelector } from "../../Redux/userPage-selectors";




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
                portionSize = {this.props.portionSize}
                
                setPortionPagination={this.props.setPortionPagination}
                portionPagination={this.props.portionPagination}

                authUserId = {this.props.authUserId}
            />

        </>
    }
}

const mapStateToProps = (state) => {
    return {
       users: getUsersSelector(state),
       pageSize: getPageSize(state),
       totalPageCount: getTotalPageCount(state),
       currentPage: getCurrentPage(state),
       isFetching: getIsFetching(state),
       followingInProcess: getFollowingInProcess(state),
       portionSize: getPortionSize(state),
       portionPagination: getPortionPagination(state),

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
            toggleIsFetching, toggleFollowingInProcess, getUsers, setPortionPagination}),

    // withAuthRedirect

)(UsersPageContainer)
