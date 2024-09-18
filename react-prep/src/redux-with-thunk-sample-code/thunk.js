import {
  fetchRequest,
  fetchRequestFailour,
  fetchRequestSuccess,
} from "./actions";

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchRequest);

    try {
      const res = await fetch("https://api.example.com/data");
      const data = res.json();
      dispatch(fetchRequestSuccess(data));
    } catch (err) {
      dispatch(fetchRequestFailour(err));
    }
  };
};
