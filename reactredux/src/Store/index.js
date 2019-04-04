import { createStore, combineReducers } from "redux";
import reducers from "../Redux/Reducers";

const store = createStore(combineReducers(reducers));

export default store;
