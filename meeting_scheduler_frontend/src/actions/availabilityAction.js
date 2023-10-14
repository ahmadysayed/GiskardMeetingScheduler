import axios from "axios";
import { 
    AVAILABILITY_CREATE_REQUEST, 
    AVAILABILITY_CREATE_SUCCESS, 
    AVAILABILITY_CREATE_FAIL,

    AVAILABILITY_DELETE_REQUEST,
    AVAILABILITY_DELETE_SUCCESS,
    AVAILABILITY_DELETE_FAIL
} from "../constants/availabilityConstants";

export const createAvailability = (availabilityData) => async (dispatch) => {
    try {
        dispatch({
            type: AVAILABILITY_CREATE_REQUEST
        });

        const { data } = await axios.post(
            `http://localhost:8000/api/availabilities/create/`,
            availabilityData
        );

        dispatch({
            type: AVAILABILITY_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: AVAILABILITY_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};



export const deleteAvailability = (availabilityId) => async (dispatch) => {
    try {
      dispatch({
        type: AVAILABILITY_DELETE_REQUEST
      });
  
      await axios.delete(`http://localhost:8000/api/availabilities/delete/${availabilityId}/`);
  
      dispatch({
        type: AVAILABILITY_DELETE_SUCCESS,
        payload: availabilityId
      });
    } catch (error) {
      dispatch({
        type: AVAILABILITY_DELETE_FAIL,
        payload: error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      });
    }
  };