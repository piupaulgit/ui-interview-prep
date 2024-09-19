import {
  FETCH_REQUEST,
  FETCH_REQUEST_FAILOUR,
  FETCH_REQUEST_SUCESS,
} from "./actionTypes";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetchRequestSuccess = (data) => {
  return {
    type: FETCH_REQUEST_SUCESS,
    payload: data,
  };
};

export const fetchRequestFailour = (error) => {
  return {
    type: FETCH_REQUEST_FAILOUR,
    payload: error,
  };
};
