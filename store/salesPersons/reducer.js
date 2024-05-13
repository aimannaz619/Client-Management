// clientReducer.js
import { FETCH_SP_REQUEST, FETCH_SP_SUCCESS, FETCH_SP_FAILURE } from './actions';

const initialState = {
    sps: [],
    loading: false,
    error: null
};

const salesPersonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SP_REQUEST:
            return { ...state, loading: true };
      case FETCH_SP_SUCCESS:
        return {
          ...state,
          sps: action.payload
          
        };
        default:
            return state;
  }

};

export default salesPersonReducer;
