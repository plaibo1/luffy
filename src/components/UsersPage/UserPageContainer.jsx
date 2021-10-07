import { connect } from "react-redux";
import { followAC, unfollowAC } from "../../Redux/usersPage-reducer";
import userPage from "./UserPage";


const mapStateToProps = (state) => {
    return {
       users: state.userPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
    
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        }
    }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(userPage)

export default UsersPageContainer;