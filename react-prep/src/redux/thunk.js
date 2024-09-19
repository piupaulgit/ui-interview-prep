import {
  fetchRequest,
  fetchRequestFailour,
  fetchRequestSuccess,
} from "./action";

export const fetchData = async () => {
  return function (dispatch) {
    dispatch(fetchRequest);

    try {
      const response = fetch(`https://reqres.in/api/users?page=2`);
      const data = response.json().data;
      dispatch(fetchRequestSuccess(data));
    } catch (err) {
      dispatch(fetchRequestFailour(err));
    }
  };
};
