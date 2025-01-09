import libraryReducer from "../libraryReducer";
import loggerMiddleware from "./loggerMiddleware";
import { createStore, applyMiddleware } from "redux";

const store = createStore(libraryReducer, applyMiddleware(loggerMiddleware));

export default store;
