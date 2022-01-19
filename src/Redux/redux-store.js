import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogPageReducer from "./dialogPage-reducer";
import homePageReducer from "./homePage-reducer";
import musicPageReducer from "./musicPage-reducer";
import userPageReducer from "./usersPage-reducer";
import testPageReducer from "./testPage-reducer";
import userAuthReducer from "./auth-reducer"
import thunkMiddleware from 'redux-thunk';



let reducers = combineReducers({
    homePage: homePageReducer,
    dialogPage: dialogPageReducer,
    musicPage: musicPageReducer,
    userPage: userPageReducer,
    testPage: testPageReducer,
    auth: userAuthReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;
