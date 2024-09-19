import React, { useEffect } from "react";
import { fetchData } from "./thunk";
import { connect } from "react-redux";

const ThunkReduxComponent = ({ data, isLoading, error, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) return <div>{JSON.stringify(data)}</div>;

  return <div>Component</div>;
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
};

const mapDispatchToProps = { fetchData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThunkReduxComponent);
