// clientReducer.js

import {
  FETCH_SP_BY_ID_SUCCESS,
  FETCH_SP_REQUEST,
  FETCH_SP_SUCCESS,
  FETCH_MEETINGS_BY_ID_SUCCESS,
  FETCH_MEETINGS_BY_ID_FAILURE,
  FETCH_MEETINGS_BY_ID_REQUEST
 
} from "./actionTypes";

const initialState = {
  sps: [],
  salePerson: {},
  meetingsById: {},
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
      case FETCH_MEETINGS_BY_ID_REQUEST:
        return {
          ...state,
          meetingsById: {},
          loading: true,
          error: null,
        };
      case FETCH_MEETINGS_BY_ID_SUCCESS:
        return {
          ...state,
          meetingsById: action.payload,
          loading: false,
        };
      case FETCH_MEETINGS_BY_ID_FAILURE:
        return {
          ...state,
          error: action.error,
          loading: false,
        };
  
    default:
      return state;
  }
};

export default salesPersonReducer;
