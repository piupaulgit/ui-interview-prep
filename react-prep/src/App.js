import "./App.css";
import UseTimerComponent from "./customHooks/useTimer/userTimerComponent";
import Sidebar from "./ThreeLinkSidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <UseTimerComponent />
      <hr />
      <Sidebar />
    </div>
  );
}

export default App;
