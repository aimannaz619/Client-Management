import { combineReducers } from "redux";
import clientReducer from "./clients/reducer";
import salesPersonReducer from "./salesPersons/reducer";
const rootReducer = combineReducers({
  clientReducer: clientReducer,
  salesPersonReducer: salesPersonReducer
});

export default rootReducer;
