// clientReducer.js

import {
  FETCH_SP_BY_ID_SUCCESS,
  FETCH_SP_REQUEST,
  FETCH_SP_SUCCESS,
} from "./actionTypes";

const initialState = {
  sps: [],
  salePerson: {},
  loading: false,
  error: null,
};

const salesPersonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SP_REQUEST:
      return { ...state, loading: true };
    case FETCH_SP_SUCCESS:
      return {
        ...state,
        sps: action.payload,
      };

    case FETCH_SP_BY_ID_SUCCESS:
      return {
        ...state,
        salePerson: action.payload,
      };
    default:
      return state;
  }
};

export default salesPersonReducer;
