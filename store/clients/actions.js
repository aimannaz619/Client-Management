// actions.js

import {
  FETCH_CLIENTS_FAILURE,
  FETCH_CLIENTS_SUCCESS,
  FETCH_CLIENTS_REQUEST,
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
