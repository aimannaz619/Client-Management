import { all , fork} from "redux-saga/effects";
import clientSaga from "./clients/saga";

export default function* rootSaga() {
  yield all([
    fork(clientSaga),
  ]);
}
