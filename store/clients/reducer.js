// clientReducer.js
import { FETCH_CLIENTS_REQUEST, FETCH_CLIENTS_SUCCESS, FETCH_CLIENTS_FAILURE, GET_CLIENTS_BY_ID, GET_CLIENTS_BY_ID_SUCCESS,GET_CLIENTS_BY_ID_FAILURE} from './actionTypes';

const initialState = {
  clients: [],
  clientById:{},
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
        case GET_CLIENTS_BY_ID:
          return {
              ...state,
              loading: true,
              error: null
          };
      case GET_CLIENTS_BY_ID_SUCCESS:
          return {
              ...state,
              clientById: action.payload,
              loading: false
          };
      case GET_CLIENTS_BY_ID_FAILURE:
          return {
              ...state,
              error: action.error,
              loading: false
          };
   
        default:
            return state;
  }

};

export default clientReducer;
