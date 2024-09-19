import React from "react";
import { Provider } from "react-redux";
import CounterComponentWithToolkit from "./CounterComponentWithToolkit";
import store from "./store";

const toolKitApp = () => {
  return (
    <Provider store={store}>
      <CounterComponentWithToolkit />
    </Provider>
  );
};

export default toolKitApp;
