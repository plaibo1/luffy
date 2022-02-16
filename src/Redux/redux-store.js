import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogPageReducer from "./dialogPage-reducer";
import homePageReducer from "./homePage-reducer";
import userPageReducer from "./usersPage-reducer";
import userAuthReducer from "./auth-reducer"
import middleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer';
import { compose } from "redux";



let reducers = combineReducers({
    homePage: homePageReducer,
    dialogPage: dialogPageReducer,
    userPage: userPageReducer,
    auth: userAuthReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(middleware)
));

// let store = createStore(reducers, applyMiddleware(middleware));

window.store = store

export default store;
