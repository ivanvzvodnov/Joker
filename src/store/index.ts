import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { jokeReducer } from "./reducers/jokeReducer";

export const store = createStore(jokeReducer, applyMiddleware(thunk))