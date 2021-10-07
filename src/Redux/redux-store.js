import { combineReducers, createStore } from "redux";
import dialogPageReducer from "./dialogPage-reducer";
import homePageReducer from "./homePage-reducer";
import musicPageReducer from "./musicPage-reducer";
import userPageReducer from "./usersPage-reducer";


let reducers = combineReducers({
    homePage: homePageReducer,
    dialogPage: dialogPageReducer,
    musicPage: musicPageReducer,
    userPage: userPageReducer
});

let store = createStore(reducers);

export default store;
