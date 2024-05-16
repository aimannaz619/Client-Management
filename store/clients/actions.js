// actions.js

import {
  FETCH_CLIENTS_FAILURE,
  FETCH_CLIENTS_SUCCESS,
    FETCH_CLIENTS_REQUEST,
    GET_CLIENTS_BY_ID,
    GET_CLIENTS_BY_ID_SUCCESS,
} from "./actionTypes";

export const fetchClientsRequest = () => ({
  type: FETCH_CLIENTS_REQUEST,
});

export const fetchClientsSuccess = (clients) => ({
  type: FETCH_CLIENTS_SUCCESS,
  payload: clients,
});

export const fetchClientsFailure = (error) => ({
  type: FETCH_CLIENTS_FAILURE,
  payload: error,
});

export const getClientsByIdsRequest = (id) => (
  {
    type: GET_CLIENTS_BY_ID,
    payload: id,
  });

export const getClientsByIdsSuccess = (clients) => ({
    type: GET_CLIENTS_BY_ID_SUCCESS,
    clients
});

export const getClientsByIdsFailure = (error) => ({
    type: GET_CLIENTS_BY_ID_FAILURE,
    error
});
