import { 
    RESERVATION_LIST_REQUEST,
    RESERVATION_LIST_SUCCESS,
    RESERVATION_LIST_FAIL,

    RESERVATION_CREATE_REQUEST, 
    RESERVATION_CREATE_SUCCESS, 
    RESERVATION_CREATE_FAIL,

    RESERVATION_DELETE_REQUEST,
    RESERVATION_DELETE_SUCCESS,
    RESERVATION_DELETE_FAIL
} from "../constants/reservationConstants"


const initialState = {
  loading: false,
  reservations: [],
  error: null,
};

export const reservationListReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVATION_LIST_REQUEST:
      return { ...state, loading: true, error: null };

    case RESERVATION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        reservations: action.payload,
      };

    case RESERVATION_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const createReservationReducer = (state = { loading: false, reservation: null, error: null }, action) => {
  switch (action.type) {
    case RESERVATION_CREATE_REQUEST:
      return { ...state, loading: true, reservation: null, error: null };

    case RESERVATION_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        reservation: action.payload,
        error: null,
      };

    case RESERVATION_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        reservation: null,
        error: action.payload,
      };

    default:
      return state;
  }
};


export const reservationDeleteReducer = (state = { }, action ) => {
  switch (action.type) {
      case RESERVATION_DELETE_REQUEST:
          return { loading: true }
      
      case RESERVATION_DELETE_SUCCESS:
          return { loading: false, success: true }
      
      case RESERVATION_DELETE_FAIL:
          return { loading: false, error: action.payload }

      default:
          return state
  }
}