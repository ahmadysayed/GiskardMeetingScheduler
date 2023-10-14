import axios from "axios";
import { 
    AVAILABILITY_CREATE_REQUEST, 
    AVAILABILITY_CREATE_SUCCESS, 
    AVAILABILITY_CREATE_FAIL,

    AVAILABILITY_DELETE_REQUEST,
    AVAILABILITY_DELETE_SUCCESS,
    AVAILABILITY_DELETE_FAIL
} from "../constants/availabilityConstants";

export const createAvailability = (availabilityData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: AVAILABILITY_CREATE_REQUEST
        });

        const {
          userLogin: { userInfo },
        } = getState()
  
        const config = {
          headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`
          }
      }


        const { data } = await axios.post(
            `http://localhost:8000/api/availabilities/create/`,
            availabilityData,
            config
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



export const deleteAvailability = (availabilityId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: AVAILABILITY_DELETE_REQUEST
      });

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }
  
      await axios.delete(`http://localhost:8000/api/availabilities/delete/${availabilityId}/`, config);
  
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