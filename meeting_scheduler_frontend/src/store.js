import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { userLoginReducer } from './reducers/userReducers';
import { slotListReducer } from './reducers/slotReducers';
import { createReservationReducer, reservationDeleteReducer } from './reducers/reservationReducer';
import { createAvailabilityReducer, availabilityDeleteReducer } from './reducers/availabilityReducers';

const reducer = { 
  userLogin: userLoginReducer,

  createAvailability: createAvailabilityReducer,
  deleteAvailability: availabilityDeleteReducer,

  slotList: slotListReducer,
  
  createReservation: createReservationReducer,
  deleteReservation: reservationDeleteReducer
};

const userInfoFromStorage = localStorage.getItem('userInfo') ?
JSON.parse(localStorage.getItem('userInfo')) : null

const middleware = [thunk];

const store = configureStore({
    reducer,
    middleware,
    devTools: true, // This enables the Redux DevTools Extension
  });

  export default store