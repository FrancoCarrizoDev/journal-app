import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";
import thunk from 'redux-thunk';
import { notesReduer } from "../reducers/notesReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	notes: notesReduer
});

export const store = createStore(
	reducers /* preloadedState, */,
	composeEnhancers(
		applyMiddleware(thunk)
	)
);
