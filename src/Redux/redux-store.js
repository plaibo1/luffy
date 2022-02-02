import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogPageReducer from "./dialogPage-reducer";
import homePageReducer from "./homePage-reducer";
import userPageReducer from "./usersPage-reducer";
import userAuthReducer from "./auth-reducer"
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer';



let reducers = combineReducers({
    homePage: homePageReducer,
    dialogPage: dialogPageReducer,
    userPage: userPageReducer,
    auth: userAuthReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;
