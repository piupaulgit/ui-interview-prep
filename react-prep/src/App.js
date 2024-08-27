import "./App.css";
import UseTimerComponent from "./customHooks/useTimer/userTimerComponent";
import Sidebar from "./TreeLinkSidebar/Sidebar";
import {DATA} from './country_capitalGame/Data';
import Game from "./country_capitalGame/Game";

function App() {
  return (
    <div className="App">
      <UseTimerComponent />
      <hr />
      {/* <Sidebar /> */}
      <hr />
      <Game data={DATA}/>
    </div>
  );
}

export default App;
