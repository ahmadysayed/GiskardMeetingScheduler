import axios from 'axios';
import {
  SLOT_LIST_REQUEST,
  SLOT_LIST_SUCCESS,
  SLOT_LIST_FAIL
} from '../constants/slotConstants';

export const listSlots = () => async (dispatch) => {
  try {
    dispatch({ type: SLOT_LIST_REQUEST });

    const { data } = await axios.get('http://localhost:8000/api/availabilities/');

    dispatch({
      type: SLOT_LIST_SUCCESS,
      payload: data,  
    });
  } catch (error) {
    dispatch({
      type: SLOT_LIST_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    });
  }
};