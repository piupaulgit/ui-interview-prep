import React, { useEffect } from "react";
import withAuth from "./hocs/withAuth";
import withTheme from "./hocs/withTheme";

const HigherOrderComponent = ({ theme }) => {
  return (
    <div>
      <h2>Higher Order component</h2>
      {theme}
      <p>
        You are able to see this component as you have a token in your local
        storage
      </p>
    </div>
  );
};

export default withAuth(withTheme(HigherOrderComponent));
