import { stopSubmit } from "redux-form";
import { AuthApi } from "../api/api";

const SET_USER_AUTH = 'luffy/auth/SET_USER_AUTH'

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
                ...action.payload
            }

        default:
            return state;
    }
} 

export const setUserAuthData = (userId, email, login, isAuthorized) =>
    ({type: SET_USER_AUTH, payload: {userId, email, login, isAuthorized}})

export const authApiRequest = () => {
    return (dispatch) => {
       return AuthApi.getAuthMe()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                dispatch(setUserAuthData(id, email, login, true))
            }
        })
    }
}

export const login = (email, password, rememberMe) => dispatch => {
    AuthApi.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(authApiRequest())
            } else {
                const msg = res.data.messages.length > 0 ? res.data.messages[0] : 'some error'
                dispatch(stopSubmit("login", { _error: msg }))
            }
        })
}

export const logout = () => dispatch => {
    AuthApi.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserAuthData(null, null, null, false))
            }
        })
}

export default userAuthReducer;