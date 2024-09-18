import {
  FETCH_REQUEST,
  FETCH_REQUEST_FAILOUR,
  FETCH_REQUEST_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_REQUEST_SUCCESS:
      return { ...state, isLoading: false, data: action.payload, error: null };
    case FETCH_REQUEST_FAILOUR:
      return { ...state, isLoading: false, data: [], error: action.payload };

    default:
      return state;
  }
};

export default dataReducer;
