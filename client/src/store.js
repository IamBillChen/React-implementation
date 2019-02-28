import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const enhancer = composeEnhancers(
	applyMiddleware(...middleware)
)

const store = createStore(
	rootReducer,  //reducer 
	initialState, //state 
	enhancer);

export default store;