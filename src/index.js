import state from './Redux/state';
import { rerenderEntireTree } from './render';
import reportWebVitals from './reportWebVitals';


rerenderEntireTree(state)


reportWebVitals();
