import "./App.css";
import UseTimerComponent from "./customHooks/useTimer/userTimerComponent";
import Sidebar from "./TreeLinkSidebar/Sidebar";
import {DATA} from './country_capitalGame/Data';
import Game from "./country_capitalGame/Game";
import Card from "./card_select_deSelect_same_order/Card";

function App() {
  return (
    <div className="App">
      <UseTimerComponent />
      <hr />
      <Game data={DATA}/>
      <hr />
      <Sidebar />
      <hr />
      <Card />
    </div>
  );
}

export default App;
