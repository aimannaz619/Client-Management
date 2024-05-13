import { combineReducers } from "redux";
import clientReducer from "./clients/reducer";

const rootReducer = combineReducers({
  client: clientReducer,
});

export default rootReducer;
