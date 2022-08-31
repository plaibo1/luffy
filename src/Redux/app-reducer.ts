import { authApiRequest } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'luffy/homeStatus/INITIALIZED_SUCCESS'

export type initialStateAppType = {
    initialized: boolean
}

let initialState:initialStateAppType = {
    initialized: false
}

const appReducer = (state = initialState, action: any):initialStateAppType => {

    switch(action.type) {

        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}


type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = ():initializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializedApp = () => (dispatch: any) => {

    const authReq = dispatch(authApiRequest());

    Promise.all([authReq])
        .then(() => {
            dispatch(initializedSuccess())
        })

}



export default appReducer;
