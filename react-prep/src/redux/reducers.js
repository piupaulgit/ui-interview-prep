import {
  FETCH_REQUEST,
  FETCH_REQUEST_FAILOUR,
  FETCH_REQUEST_SUCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_REQUEST_SUCESS:
      return { ...state, isLoading: false, data: action.payload };

    case FETCH_REQUEST_FAILOUR:
      return { ...state, isLoading: false, data: null, error: action.payload };

    default:
      return state;
  }
};
