import { UsersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IN_PROCESS = 'TOGGLE_IN_PROCESS';

let initialState = {
    users: [],
    pageSize: 9,
    totalPageCount: 21,
    currentPage: 15,
    isFetching: false,
    followingInProcess: []
}

const userPageReducer = (state = initialState, action) => {

    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return {...u, followed: true}
                    return u;
                })
            }
        
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return {...u, followed: false}
                    return u;
                })
            }
        
        case SET_USERS:
            return {...state, users:  [...action.users]}
        
        case SET_CURRENT_PAGE:
            return {...state, currentPage:  action.curPage}

        case SET_USERS_TOTAL_COUNT:
            return {...state, totalPageCount:  action.totalCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching:  action.isFetched} 
        
        case TOGGLE_IN_PROCESS: {
            return {
                ...state, followingInProcess: action.toggle
                ? [...state.followingInProcess, action.userId]
                : state.followingInProcess.filter(id => id != action.userId)
            }
        }

        default:
            return state;
    }

} 

export const followAccept = (userId) => ({type: FOLLOW, userId})
export const unfollowAccept = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (curPage) => ({type: SET_CURRENT_PAGE, curPage})
export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetched) => ({type: TOGGLE_IS_FETCHING, isFetched})
export const toggleFollowingInProcess = (toggle, userId) => ({type: TOGGLE_IN_PROCESS, toggle, userId})


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))

        UsersAPI.getUsers(currentPage, pageSize)
            .then(res => {
                dispatch(setUsers(res.items))
                dispatch(setUsersTotalCount(200))
                dispatch(toggleIsFetching(false))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProcess(true, userId))
        UsersAPI.follow(userId)
            .then(res => {
                if (res.resultCode === 0) {
                    dispatch(followAccept(userId))
                }
                dispatch(toggleFollowingInProcess(false, userId))
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProcess(true, userId))
        UsersAPI.unfollow(userId)
            .then(res => {
                if (res.resultCode === 0) {
                    dispatch(unfollowAccept(userId))
                }
                dispatch(toggleFollowingInProcess(false, userId))
            })
    }
}



export default userPageReducer;
