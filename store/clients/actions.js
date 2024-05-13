// actions.js
export const FETCH_CLIENTS_REQUEST = 'FETCH_CLIENTS_REQUEST';
export const FETCH_CLIENTS_SUCCESS = 'FETCH_CLIENTS_SUCCESS';
export const FETCH_CLIENTS_FAILURE = 'FETCH_CLIENTS_FAILURE';

export const fetchClientsRequest = () => ({
    type: FETCH_CLIENTS_REQUEST
});

export const fetchClientsSuccess = (clients) => ({
    type: FETCH_CLIENTS_SUCCESS,
    payload: clients
});

export const fetchClientsFailure = (error) => ({
    type: FETCH_CLIENTS_FAILURE,
    payload: error
});
