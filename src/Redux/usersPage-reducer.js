const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {id: 1, fullName: "Kilyan Mbappe", following: true, status: 'Ya proebalsya', location: {city: 'Paris', country: 'France'}},
        {id: 2, fullName: "Johnatan Leander", following: true, status: 'Ya krutoi', location: {city: 'Stockholm', country: 'Sweden'}},
        {id: 3, fullName: "Vasya Pupkin", following: false, status: 'Ya demedroll', location: {city: 'Shachty', country: 'Rostov-on-Don'}},
      ]
}

const userPageReducer = (state = initialState, action) => {

    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return {...u, following: true}
                    return u;
                })
            }
        
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return {...u, following: false}
                    return u;
                })
            }
            

        default:
            return state;
    }

} 

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})


export default userPageReducer;