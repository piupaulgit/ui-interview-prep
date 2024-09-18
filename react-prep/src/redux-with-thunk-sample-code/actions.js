import {
  FETCH_REQUEST,
  FETCH_REQUEST_FAILOUR,
  FETCH_REQUEST_SUCCESS,
} from "./actionTypes";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetchRequestSuccess = (data) => {
  return {
    type: FETCH_REQUEST_SUCCESS,
    payload: data,
  };
};

export const fetchRequestFailour = (error) => {
  return {
    type: FETCH_REQUEST_FAILOUR,
    error: error,
  };
};
