import { SLOT_LIST_REQUEST, SLOT_LIST_SUCCESS, SLOT_LIST_FAIL } from '../constants/slotConstants';

export const slotListReducer = (state = { loading: false, slots: [] }, action) => {
  switch (action.type) {
    case SLOT_LIST_REQUEST:
      return { ...state, loading: true };

    case SLOT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        slots: action.payload,
      };

    case SLOT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
