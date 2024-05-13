import { all , fork} from "redux-saga/effects";
import clientSaga from "./clients/saga";
import salesPersonsSaga from "./salesPersons/saga";

export default function* rootSaga() {
  yield all([
    fork(clientSaga),
    fork(salesPersonsSaga)
  ]);
}
