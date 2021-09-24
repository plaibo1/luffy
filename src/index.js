import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/redux-store';
import reportWebVitals from './reportWebVitals';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} 
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe(() => {
    rerenderEntireTree(store.getState())
});


reportWebVitals();
