// clientSaga.js
import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_CLIENTS_REQUEST, fetchClientsSuccess, fetchClientsFailure } from './actions';
import { fetchClients } from '../services/clientsService';

function* fetchClientsSaga() {
    try {
        const clients = yield call(fetchClients);
        yield put(fetchClientsSuccess(clients));
    } catch (error) {
        yield put(fetchClientsFailure(error));
    }
}

function* clientSaga() {
    yield takeLatest(FETCH_CLIENTS_REQUEST, fetchClientsSaga);
}

export default clientSaga;
