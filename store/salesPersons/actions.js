// actions.js
export const FETCH_SP_REQUEST = 'FETCH_SP_REQUEST';
export const FETCH_SP_SUCCESS = 'FETCH_SP_SUCCESS';
export const FETCH_SP_FAILURE = 'FETCH_SP_FAILURE';

export const fetchSpsRequest = () => ({
    type: FETCH_SP_REQUEST
});

export const fetchSpsSuccess = (salesPersons) => ({
    type: FETCH_SP_SUCCESS,
    payload: salesPersons
});

export const fetchSpsFailure = (error) => ({
    type: FETCH_SP_FAILURE,
    payload: error
});
