const ThemedComponent = ({ theme, toggleTheme }) => {
  return (
    <div>
      <button onClick={toggleTheme}>Switch to other them</button>
      <h1>You are viewing {theme} theme</h1>
    </div>
  );
};

export default ThemedComponent;
