import React from "react";
import useFetchData from "./hooks/useFetchData";
import "./customHooks.css";
import useForm from "./hooks/useForm";
import useCountDown from "./hooks/useCountDown";

const CustomHooks = () => {
  const {
    data: userData,
    loading: loadingUser,
    error: erroruser,
  } = useFetchData("https://jsonplaceholder.typicode.com/users");

  //   second useFetch call
  //   const {
  //     data: posts,
  //     loading: loadingPosts,
  //     error: errorPosts,
  //   } = useFetchData("https://jsonplaceholder.typicode.com/posts");

  if (loadingUser) <p>loading</p>;
  if (erroruser) <p>{erroruser}</p>;

  // form related code
  const initialState = {
    email: "",
    password: "",
  };

  const validationRules = {
    email: (value) => /\S+@\S+\.\S+/.test(value), // Email must be valid
    password: (value) => value.length >= 6, // Password must be at least 6 characters
  };

  const { values, errors, handleChange, validate } = useForm(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(validationRules)) {
      console.log("Form Submitted Successfully:", values);
    } else {
      console.error("Form Validation Failed:", errors);
    }
  };

  // form related code end

  //countdown code start
  const initialTimer = 100;
  const timeLeft = useCountDown(initialTimer);

  //countdown code end
  return (
    <div>
      <h3>Load data user useFetchData(custom hook)</h3>
      {userData.length > 0 &&
        userData.map((user, id) => {
          return <div key={id}>{user.name}</div>;
        })}

      <div className="form-holder">
        <h3>Form Validation with useForm hook(custom hook)</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="countDown-holder">
        <h2>{timeLeft}</h2>
      </div>
    </div>
  );
};

export default CustomHooks;
