
import { UsersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_ON_CHANGE = 'UPDATE-POST-ON-CHANGE';
const POST_LIKE_UP = 'POST-LIKE-UP';
const UPDATE_COMMENT_ON_CHANGE = 'UPDATE_COMMENT_ON_CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    postData: [
        {id: 1, msg: "Hello world222", likesCounter: 27},
        {id: 2, msg: "I suck balls and dicks", likesCounter: 322, img: 'https://sun9-65.userapi.com/impg/YnnNHhrAfEPu-XyfGswhi8ecWQgXZgZhwsC89Q/5TSE1aXGyio.jpg?size=1440x1920&quality=96&sign=7c872fa40e75196366bba2ef39d8e5ce&type=album'},
        {id: 3, msg: "Hello world3", likesCounter: 122},
        {id: 4, msg: "Hello world4", likesCounter: 142255},
      ],

    textareaValue: '',

    friends: [
      {id: 1, name: 'Sereja 😎', avatar: 'https://sun9-15.userapi.com/impg/1q_SgUgrCPro-tyluyUd28NrTC48wu_8GVPs_A/m-uzaR8RmGM.jpg?size=1623x2160&quality=96&sign=d9a31dcd853a93df2c647453c67dd27e&type=album'},
      {id: 2, name: 'Eblan 🤡', avatar: 'https://sun9-65.userapi.com/impg/YnnNHhrAfEPu-XyfGswhi8ecWQgXZgZhwsC89Q/5TSE1aXGyio.jpg?size=1440x1920&quality=96&sign=7c872fa40e75196366bba2ef39d8e5ce&type=album'},
      {id: 3, name: 'Putyaha 🥺', avatar: 'https://sun9-81.userapi.com/impg/Ni2lvZTfzagpM2W-CZsb1gep5SBg2fLBW9kBKg/dbHKDMH4Sho.jpg?size=1080x1080&quality=96&sign=64827ab8fb47c80a99b9da3cf209740a&type=album'},
      {id: 4, name: 'Kent ✨', avatar: 'https://sun1-92.userapi.com/impf/c841335/v841335412/2a966/7HErTBr7viU.jpg?size=1080x1080&quality=96&sign=ac6d09c250ac59fcaf6a6db88c8cdae3&type=album'},
      {id: 5, name: 'Raisa', avatar: 'https://sun9-79.userapi.com/impg/LReNMiggoW4S-I-DTG8oliwp9-VBPA_fswODsg/CDv7kDbsXGY.jpg?size=960x1280&quality=96&sign=672fcc47df3355a5514a7d433ee0c346&type=album'},
      {id: 6, name: 'Yorgan', avatar: 'https://sun9-15.userapi.com/impg/DmYfUskzNo_4auy-MmOcOpy5_0WzViqOjGHp0g/al91JFi1m9U.jpg?size=796x1000&quality=96&sign=6fd153abeebd0fd137e850ef9baadc26&type=album'},
      {id: 7, name: 'Jaly (Jell)', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZsqA1ZNIF_p454AqcE4Zs0mTGBVjYMoeTA&usqp=CAU'},
    ],

    postComments: [
        {id: 1, name: 'Alex', comment: 'hello its my first comment'},
        {id: 2, name: 'Andrew', comment: 'Just for fun'}
    ],

    commentTextareaValue: '',

    userProfile: null

}

const homePageReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST: {
            if (state.textareaValue === '') return state;
    
            let newPost = {
                id: 5,
                msg: state.textareaValue,
                likesCounter: 0
            };

            return {
                ...state,
                postData: [...state.postData, newPost],
                textareaValue: ''
            }

        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.profile
            }
        }
        
        case UPDATE_POST_ON_CHANGE: {
            return {
                ...state,
                textareaValue: action.txt
            }
        }
        
        case POST_LIKE_UP: {
            let copyState = {...state}
            copyState.postData = [...state.postData]
            copyState.postData[2].likesCounter++
            return copyState;
        }

        case UPDATE_COMMENT_ON_CHANGE: {
            return {
                ...state,
                commentTextareaValue: action.txt
            }
        }
            

        default:
            return state;
    }

} 

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const addPost = () => ({type: ADD_POST})

export const updatePostOnChange = (text) => (
  {type: UPDATE_POST_ON_CHANGE, txt:text}
)

export const updateCommentOnChange = (text) => (
    {type: UPDATE_COMMENT_ON_CHANGE, txt:text}
)

export const getProfile = (userId) => {
    return (dispatch) => {

        const userIdInit = userId ?? 21365
        UsersAPI.getProfile(userIdInit)
        .then(data => {
            dispatch(setUserProfile(data))
        })

    }
}



export const likeUp = () => ({type: 'POST-LIKE-UP'})

export default homePageReducer;