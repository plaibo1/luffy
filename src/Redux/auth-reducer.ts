import { stopSubmit } from "redux-form";
import { AuthApi } from "../api/api";

const SET_USER_AUTH = 'luffy/auth/SET_USER_AUTH'



let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuthorized: false
}

export type initialStateAuthType = typeof initialState;

const userAuthReducer = (state = initialState, action:any): initialStateAuthType => {

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

type setUserAuthDataPayloadObject = {
    userId:number | null 
    email:string | null
    login:string | null
    isAuthorized:boolean
}

type setUserAuthData = {
    type: typeof SET_USER_AUTH,
    payload: setUserAuthDataPayloadObject
}

export const setUserAuthData = (userId:number | null, email:string | null, login:string | null, isAuthorized:boolean): setUserAuthData => 
    ({type: SET_USER_AUTH, payload: {userId, email, login, isAuthorized}})

export const authApiRequest = () => {
    return (dispatch:any) => {
       return AuthApi.getAuthMe()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                dispatch(setUserAuthData(id, email, login, true))
            }
        })
    }
}

export const login = (email:any, password:any, rememberMe:any) => (dispatch:any) => {
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

export const logout = () => (dispatch:any) => {
    AuthApi.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserAuthData(null, null, null, false))
            }
        })
}

export default userAuthReducer;