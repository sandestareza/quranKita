import { legacy_createStore, compose, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import rootReducer from "./reducer"

export const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)))
