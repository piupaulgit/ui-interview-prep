import { useState } from "react";

const WithTheme = (WrappedComponent) => {
  return function ThemeComponent(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const themeStyles = {
      dark: {
        background: "#333",
        color: "#f1f1f1",
      },
      light: {
        background: "#f1f1f1",
        color: "#333",
      },
    };
    return (
      <div style={themeStyles[theme]}>
        <WrappedComponent {...props} theme={theme} toggleTheme={toggleTheme} />
      </div>
    );
  };
};

export default WithTheme;
