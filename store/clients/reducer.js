// clientReducer.js
import { FETCH_CLIENTS_REQUEST, FETCH_CLIENTS_SUCCESS, FETCH_CLIENTS_FAILURE } from './actions';

const initialState = {
    clients: [],
    loading: false,
    error: null
};

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CLIENTS_REQUEST:
            return { ...state, loading: true };
      case FETCH_CLIENTS_SUCCESS:
        return {
          ...state,
         clients: action.payload
          
        };

   
        default:
            return state;
  }

};

export default clientReducer;
