import { useEffect, useState } from "react";

const withTheme = (WrappedComponent) => {
  return (props) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    useEffect(() => {
      setTheme(localStorage.getItem("theme"));
    }, [theme]);

    const style = {
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
    };

    const changeTheme = () => {
      let changeTheme =
        localStorage.getItem("theme") === "light" ? "dark" : "light";
      setTheme(changeTheme);
      localStorage.setItem("theme", changeTheme);
    };

    return (
      <div style={style}>
        <button onClick={changeTheme}>change Theme</button>
        <WrappedComponent {...props} theme={theme} />
      </div>
    );
  };
};

export default withTheme;
