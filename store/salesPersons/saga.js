// salesPersonsSaga.js
import { takeLatest, call, put, all, fork, take } from "redux-saga/effects";

import {
  fetchSalesPersonByIdService,
  fetchSalesPersons,
  saveMeetingService,
} from "../../services/salesPersonService";
import {
  FETCH_SP_BY_ID_REQUEST,
  FETCH_SP_BY_ID_SUCCESS,
  FETCH_SP_REQUEST,
  FETCH_SP_SUCCESS,
  SAVE_MEETING,
} from "./actionTypes";

function* fetchSpsSaga() {
  try {
    const salesPersons = yield call(fetchSalesPersons);

    yield put({ type: FETCH_SP_SUCCESS, payload: salesPersons });
  } catch (error) {
    yield put(fetchSpsFailure(error));
  }
}

function* fetchSPByIdSaga(payload) {
  try {
    const salesPerson = yield call(
      fetchSalesPersonByIdService,
      payload.payload
    );

    yield put({ type: FETCH_SP_BY_ID_SUCCESS, payload: salesPerson });
  } catch (error) {}
  try {
    const salesPersons = yield call(fetchSalesPersons);

    yield put({ type: FETCH_SP_SUCCESS, payload: salesPersons });
  } catch (error) {
    yield put(fetchSpsFailure(error));
  }
}

function* saveMeetingSaga(action) {
  try {
    const response = yield call(saveMeetingService, action.payload);
    action.payload.callbacks.success();
    return response;
  } catch (error) {}
}

function* watchSpsSaga() {
  yield takeLatest(FETCH_SP_REQUEST, fetchSpsSaga);
}

function* watchFetchSPByIdSaga() {
  yield takeLatest(FETCH_SP_BY_ID_REQUEST, fetchSPByIdSaga);
}

function* watchSaveMeetingSaga() {
  yield takeLatest(SAVE_MEETING, saveMeetingSaga);
}

export function* salesPersonsSaga() {
  yield all([
    fork(watchSpsSaga),
    fork(watchFetchSPByIdSaga),
    fork(watchSaveMeetingSaga),
  ]);
}

export default salesPersonsSaga;
