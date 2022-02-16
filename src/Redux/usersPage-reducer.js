import { UsersAPI } from "../api/api";
import { objectHelper } from "../utils/object-helper";

const FOLLOW = 'luffy/userPage/FOLLOW';
const UNFOLLOW = 'luffy/userPage/UNFOLLOW';
const SET_USERS = 'luffy/userPage/SET_USERS';
const SET_CURRENT_PAGE = 'luffy/userPage/SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'luffy/userPage/SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'luffy/userPage/TOGGLE_IS_FETCHING';
const TOGGLE_IN_PROCESS = 'luffy/userPage/TOGGLE_IN_PROCESS';
const SET_PORTION_PAGINATION = 'luffy/userPage/SET_PORTION_PAGINATION'

let initialState = {
    users: [],
    pageSize: 9,
    totalPageCount: 21,
    currentPage: 15,
    isFetching: false,
    followingInProcess: [],
    portionSize: 20,
    portionPagination: 1
}

const userPageReducer = (state = initialState, action) => {

    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: objectHelper(state.users, action.userId, "id", {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: objectHelper(state.users, action.userId, "id", {followed: false})
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
                : state.followingInProcess.filter(id => id !== action.userId)
            }
        }

        case SET_PORTION_PAGINATION: {
            return {
                ...state,
                portionPagination: action.portionPagination
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
export const setPortionPagination = (portionPagination) => ({type: SET_PORTION_PAGINATION, portionPagination})


export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))

        const res = await UsersAPI.getUsers(currentPage, pageSize)

        dispatch(setUsers(res.items))
        dispatch(setUsersTotalCount(res.totalCount))
        dispatch(toggleIsFetching(false))

    }
}



const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

    dispatch(toggleFollowingInProcess(true, userId))

    const res = await apiMethod(userId);
    if (res.resultCode === 0) dispatch(actionCreator(userId))

    dispatch(toggleFollowingInProcess(false, userId))

}


export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, UsersAPI.follow.bind(UsersAPI), followAccept)
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, UsersAPI.unfollow.bind(UsersAPI), unfollowAccept)
    }
}



export default userPageReducer;
