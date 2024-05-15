// clientSaga.js
import { takeLatest, call, put, all, fork } from "redux-saga/effects";
import {
  FETCH_CLIENTS_REQUEST,
  fetchClientsFailure,
  FETCH_CLIENTS_SUCCESS,
} from "./actions";
import { fetchClients } from "../../services/clientsService";

function* fetchClientsSaga() {
  try {
    const clients = yield call(fetchClients);
   
    // yield put(fetchClientsSuccess(clients));
    yield put({ type: FETCH_CLIENTS_SUCCESS, payload: clients });
  } catch (error) {
    yield put(fetchClientsFailure(error));
  }
}

function* watchClientSaga() {
  yield takeLatest(FETCH_CLIENTS_REQUEST, fetchClientsSaga);
}

export function* clientSaga() {
  yield all([fork(watchClientSaga)]);
}

export default clientSaga;
