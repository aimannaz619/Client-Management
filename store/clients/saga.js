// clientSaga.js
import { takeLatest, call, put, all, fork } from "redux-saga/effects";
import {
  FETCH_CLIENTS_REQUEST,
  fetchClientsFailure,
  FETCH_CLIENTS_SUCCESS,
  GET_CLIENTS_BY_ID,
  GET_CLIENTS_BY_ID_SUCCESS,
  GET_ASSOCIATED_CLIENTS_SUCCESS,
  GET_ASSOCIATED_CLIENTS,
} from "./actionTypes";
import {
  fetchAssociatedClientsService,
  fetchClients,
} from "../../services/clientsService";
import {
  getClientsByIdsSuccess,
  getClientsByIdsFailure,
  getClientsByIdsRequest,
} from "./actions";
import { getClientsByIds } from "../../services/clientsService";

function* fetchClientsSaga() {
  try {
    const clients = yield call(fetchClients);
    yield put({ type: FETCH_CLIENTS_SUCCESS, payload: clients });
  } catch (error) {
    yield put(fetchClientsFailure(error));
  }
}

function* fetchClientsByIdSaga(action) {
  try {
    const clientsById = yield call(getClientsByIds, action.payload);
    yield put({ type: GET_CLIENTS_BY_ID_SUCCESS, payload: clientsById });
  } catch (error) {}
}



function* watchClientSaga() {
  yield takeLatest(FETCH_CLIENTS_REQUEST, fetchClientsSaga);
}

function* watchGetClientsByIds() {
  yield takeLatest(GET_CLIENTS_BY_ID, fetchClientsByIdSaga);
}



export function* clientSaga() {
  yield all([
    fork(watchClientSaga),
    fork(watchGetClientsByIds),
   
  ]);
}

export default clientSaga;
