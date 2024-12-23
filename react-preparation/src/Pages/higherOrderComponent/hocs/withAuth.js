const withAuth = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = localStorage.getItem("token");

    if (!isLoggedIn) {
      return <p>You Need to Login First</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
