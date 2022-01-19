import { UsersAPI } from "../api/api";

const SET_USER_AUTH = 'SET_USER_AUTH'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthorized: false
}

const userAuthReducer = (state = initialState, action) => {

    switch(action.type) {
    
        case SET_USER_AUTH:
            return {
                ...state,
                ...action.data,
                isAuthorized: true
            }

        default:
            return state;
    }
} 

export const setUserAuthData = (userId, email, login) =>
    ({type: SET_USER_AUTH, data: {userId, email, login}})

export const authApiRequest = () => {
    return (dispatch) => {
        UsersAPI.getAuthMe()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                dispatch(setUserAuthData(id, email, login))
            }
        })
    }
}

export default userAuthReducer;