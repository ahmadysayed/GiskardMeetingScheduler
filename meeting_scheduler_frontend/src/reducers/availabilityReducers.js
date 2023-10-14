import { 
    AVAILABILITY_CREATE_REQUEST, 
    AVAILABILITY_CREATE_SUCCESS, 
    AVAILABILITY_CREATE_FAIL,

    AVAILABILITY_DELETE_REQUEST,
    AVAILABILITY_DELETE_SUCCESS,
    AVAILABILITY_DELETE_FAIL
} from "../constants/availabilityConstants";


export const createAvailabilityReducer = (state = { loading: false, availability: null, error: null }, action) => {
    switch (action.type) {
      case AVAILABILITY_CREATE_REQUEST:
        return { ...state, loading: true, availability: null, error: null };
  
      case AVAILABILITY_CREATE_SUCCESS:
        return {
          ...state,
          loading: false,
          availability: action.payload,
          error: null,
        };
  
      case AVAILABILITY_CREATE_FAIL:
        return {
          ...state,
          loading: false,
          availability: null,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  

export const availabilityDeleteReducer = (state = { }, action ) => {
  switch (action.type) {
      case AVAILABILITY_DELETE_REQUEST:
          return { loading: true }
      
      case AVAILABILITY_DELETE_SUCCESS:
          return { loading: false, success: true }
      
      case AVAILABILITY_DELETE_FAIL:
          return { loading: false, error: action.payload }

      default:
          return state
  }
}