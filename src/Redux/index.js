import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { necessaryInfo } from "./NecessaryInfo";
import { composeWithDevTools } from "redux-devtools-extension";

const allReducers = combineReducers({
  necessaryInfo,
});

const com = compose(applyMiddleware(thunk), composeWithDevTools());

export const store = createStore(allReducers, com);
