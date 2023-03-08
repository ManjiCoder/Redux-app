import { combineReducers } from "redux";
import reducer from "./amountReducers";

// All Reducer are combine here in reducers
const reducers = combineReducers({
  amount: reducer,
});

export default reducers;
