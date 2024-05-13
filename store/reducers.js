import { combineReducers } from "redux";
import clientReducer from "./clients/reducer";
import salesPersonReducer from "./salesPersons/reducer";
const rootReducer = combineReducers({
  client: clientReducer,
  salesPerson: salesPersonReducer
});

export default rootReducer;
