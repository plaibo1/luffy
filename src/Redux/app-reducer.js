import { authApiRequest } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {

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

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializedApp = () => dispatch => {

    const authReq = dispatch(authApiRequest());

    Promise.all([authReq])
        .then(() => {
            dispatch(initializedSuccess())
        })

}



export default appReducer;