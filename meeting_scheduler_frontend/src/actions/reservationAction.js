import axios from "axios";
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
} from "../constants/reservationConstants";




export const listReservation = () => async (dispatch, getState) => {
    try {
      dispatch({ type: RESERVATION_LIST_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState()

    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }
  
      const { data } = await axios.get('http://localhost:8000/api/reservations/', config);
  
      dispatch({
        type: RESERVATION_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: RESERVATION_LIST_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const createReservation = (reservationData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: RESERVATION_CREATE_REQUEST
        });


        const { data } = await axios.post(
            `http://localhost:8000/api/reservations/create/`,
            reservationData
        );

        dispatch({
            type: RESERVATION_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: RESERVATION_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};


export const deleteReservation = (email) => async (dispatch) => {
    try {
      dispatch({
        type: RESERVATION_DELETE_REQUEST
      });
  
      await axios.delete(`http://localhost:8000/api/reservations/delete/${email}/`);
  
      dispatch({
        type: RESERVATION_DELETE_SUCCESS,
        payload: email
      });
    } catch (error) {
      dispatch({
        type: RESERVATION_DELETE_FAIL,
        payload: error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      });
    }
  };