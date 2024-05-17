// actions.js

import {
  FETCH_SP_REQUEST,
  FETCH_SP_SUCCESS,
  FETCH_SP_FAILURE,
  FETCH_SP_BY_ID_REQUEST,
  SAVE_MEETING,
} from "./actionTypes";

export const fetchSpsRequest = () => ({
  type: FETCH_SP_REQUEST,
});

export const fetchSpsSuccess = (salesPersons) => ({
  type: FETCH_SP_SUCCESS,
  payload: salesPersons,
});

export const fetchSpsFailure = (error) => ({
  type: FETCH_SP_FAILURE,
  payload: error,
});

export const fetchSalesPersonById = (id) => ({
  type: FETCH_SP_BY_ID_REQUEST,
  payload: id,
});

export const saveMeetingAction = (payload) => ({
  type: SAVE_MEETING,
  payload,
});
