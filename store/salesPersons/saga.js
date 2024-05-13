// salesPersonsSaga.js
import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import { FETCH_SP_REQUEST, fetchSpsSuccess, fetchSpsFailure, FETCH_SP_SUCCESS } from './actions';
import { fetchSalesPersons } from '../../services/salesPersonService';

function* fetchSpsSaga() {
    try {
        const salesPersons = yield call(fetchSalesPersons);
        yield put ({type:FETCH_SP_SUCCESS , payload :salesPersons})
    } catch (error) {
        yield put(fetchSpsFailure(error));
    }
}

function* watchSpsSaga() {
    yield takeLatest(FETCH_SP_REQUEST, fetchSpsSaga);
}

export function* salesPersonsSaga() {
    yield all([
        fork(watchSpsSaga)
    ])
}

export default salesPersonsSaga;
