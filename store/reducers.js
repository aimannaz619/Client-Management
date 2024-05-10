import { combineReducers } from "redux";
import { clientReducer } from "./clients/reducer";

const rootReducer = combineReducers({
  clientReducer: clientReducer,
});

export default rootReducer;
