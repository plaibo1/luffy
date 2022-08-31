import { HomeApi } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'luffy/homePage/ADD-POST';
const POST_LIKE_UP = 'luffy/homePage/POST-LIKE-UP';
const SET_USER_PROFILE = 'luffy/homePage/SET_USER_PROFILE';
const SET_STATUS = 'luffy/homePage/SET_STATUS';
const SET_USER_AVATAR = 'luffy/homePage/SET_USER_AVATAR';

export type initialStateHomePageType = {
    postData: Array<{id: number, msg: string, likesCounter: number, img?: string}>
    friends: Array<{id: number, name: string, avatar: string}>
    userProfile: any
    status: string,
    textareaValue: string
}

let initialState:initialStateHomePageType = {
    postData: [
        {id: 1, msg: "Hello world222", likesCounter: 27},
        {id: 2, msg: "I suck balls and dicks", likesCounter: 322, img: 'https://sun9-65.userapi.com/impg/YnnNHhrAfEPu-XyfGswhi8ecWQgXZgZhwsC89Q/5TSE1aXGyio.jpg?size=1440x1920&quality=96&sign=7c872fa40e75196366bba2ef39d8e5ce&type=album'},
        {id: 3, msg: "Hello world3", likesCounter: 122},
        {id: 4, msg: "Hello world4", likesCounter: 142255},
      ],

    friends: [
      {id: 1, name: 'Sereja 😎', avatar: 'https://sun9-15.userapi.com/impg/1q_SgUgrCPro-tyluyUd28NrTC48wu_8GVPs_A/m-uzaR8RmGM.jpg?size=1623x2160&quality=96&sign=d9a31dcd853a93df2c647453c67dd27e&type=album'},
      {id: 2, name: 'Eblan 🤡', avatar: 'https://sun9-65.userapi.com/impg/YnnNHhrAfEPu-XyfGswhi8ecWQgXZgZhwsC89Q/5TSE1aXGyio.jpg?size=1440x1920&quality=96&sign=7c872fa40e75196366bba2ef39d8e5ce&type=album'},
      {id: 3, name: 'Putyaha 🥺', avatar: 'https://sun9-81.userapi.com/impg/Ni2lvZTfzagpM2W-CZsb1gep5SBg2fLBW9kBKg/dbHKDMH4Sho.jpg?size=1080x1080&quality=96&sign=64827ab8fb47c80a99b9da3cf209740a&type=album'},
      {id: 4, name: 'Kent ✨', avatar: 'https://sun1-92.userapi.com/impf/c841335/v841335412/2a966/7HErTBr7viU.jpg?size=1080x1080&quality=96&sign=ac6d09c250ac59fcaf6a6db88c8cdae3&type=album'},
      {id: 5, name: 'Raisa', avatar: 'https://sun9-79.userapi.com/impg/LReNMiggoW4S-I-DTG8oliwp9-VBPA_fswODsg/CDv7kDbsXGY.jpg?size=960x1280&quality=96&sign=672fcc47df3355a5514a7d433ee0c346&type=album'},
      {id: 6, name: 'Yorgan', avatar: 'https://sun9-15.userapi.com/impg/DmYfUskzNo_4auy-MmOcOpy5_0WzViqOjGHp0g/al91JFi1m9U.jpg?size=796x1000&quality=96&sign=6fd153abeebd0fd137e850ef9baadc26&type=album'},
      {id: 7, name: 'Jaly (Jell)', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZsqA1ZNIF_p454AqcE4Zs0mTGBVjYMoeTA&usqp=CAU'},
    ],

    userProfile: null,

    status: '',

    textareaValue: ''
    
}

const homePageReducer = (state = initialState, action:any):initialStateHomePageType => {

    switch(action.type) {
        case ADD_POST: {
            if (state.textareaValue === '') return state;
    
            let newPost = {
                id: 5,
                msg: action.postText,
                likesCounter: 0
            };

            return {
                ...state,
                postData: [...state.postData, newPost],
            }

        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.profile
            }
        }
        
        case POST_LIKE_UP: {
            let copyState = {...state}
            copyState.postData = [...state.postData]
            copyState.postData[action.postId].likesCounter++
            return copyState;
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case SET_USER_AVATAR: {
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos}
            }
        }

        default:
            return state;
    }

} 

export const setUserProfile = (profile:any) => ({type: SET_USER_PROFILE, profile})

export const addPost = (postText:any) => ({type: ADD_POST, postText})

export const setUserAva = (photos:any) => ({type: SET_USER_AVATAR, photos})

export const setStatus = (status:any) => (
    {type: SET_STATUS, status}
)

export const getProfile = (userId:any) => {
    return async (dispatch:any) => {
        const data = await HomeApi.getProfile(userId)
        dispatch(setUserProfile(data))
    }
}

export const getStatus = (userId:any) => {
    return async (dispatch:any) => {
        const userIdInit = userId ?? 21365
        const data = await HomeApi.getStatus(userIdInit);

        dispatch(setStatus(data))
    }
}

export const updateStatus = (status:any) => {
    return async (dispatch:any) => {
        const res = await HomeApi.updateStatus(status)

        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }

    }
}


export const updatePhoto = (photos:any) => {
    return async (dispatch:any) => {
        const res = await HomeApi.updateUserPhoto(photos)

        if (res.resultCode === 0) {
            dispatch(setUserAva(res.data.photos))
        }

    }
}


export const updateProfile = (profile:any) => {
    return async (dispatch:any, getState:any) => {

        const userId = getState().auth.userId;

        const res = await HomeApi.saveProfile(profile)

        if (res.resultCode === 0) {
            dispatch(getProfile(userId))
        } else {
            const msg = res.messages.length > 0 ? res.messages[0] : 'some error'
            dispatch(stopSubmit( "editProfile", { _error: msg }))
            
            return Promise.reject(msg);
        }

    }
}



export const likeUp = (postId:any) => ({type: 'POST-LIKE-UP', postId})

export default homePageReducer;