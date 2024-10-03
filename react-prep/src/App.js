import "./App.css";
import ThemedComponent from "./lightDarkTheme/ThemedComponent";
import WithTheme from "./lightDarkTheme/WithTheme";

const ThemeComponent = WithTheme(ThemedComponent);
function App() {
  return (
    <div className="App">
      <div>
        <ThemeComponent />
      </div>
    </div>
  );
}

export default App;
