import { UsersAPI } from "../api/api";

const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1,  name: 'alex alex'},
        {id: 2,  name: 'sanya sasha'}
    ]
}

let testPageReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS: 
            return {
                ...state, 
                users: [...action.users]
            }

        default:
            return state 

    }

}

export const setUsersTest = (users) => ({type: SET_USERS, users})

export const getTestUsers = () => {
    return dispatch => {
        UsersAPI.getTestUsers()
            .then(data => {
                dispatch(setUsersTest(data.items))
            })
    }
}

export default testPageReducer;