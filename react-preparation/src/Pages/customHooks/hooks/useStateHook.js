import { useReducer } from "react";

const changeState = (state, newValue) => newValue;

const useStateHook = (initialValue) => {
  const [state, dispatch] = useReducer(changeState, initialValue);

  const setState = (newValue = state) => {
    dispatch(newValue);
  };

  return [state, setState];
};

export default useStateHook;
