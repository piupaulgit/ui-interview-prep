import "./App.css";
import UseTimerComponent from "./customHooks/useTimer/userTimerComponent";
import Sidebar from "./TreeLinkSidebar/Sidebar";
import { DATA } from "./country_capitalGame/Data";
import CHART_DATA from "./velocity_chart/data";
import Game from "./country_capitalGame/Game";
import Card from "./card_select_deSelect_same_order/Card";
import Chart from "./velocity_chart/Chart";
import BoxColorGame from "./colorRevealGame/BoxColorGame";

const BOX_COUNT = 12;

function App() {
  return (
    <div className="App">
      <UseTimerComponent />
      {/* <hr />
      <Game data={DATA} />
      <hr />
      <Sidebar />
      <hr /> */}
      {/* <Chart data={CHART_DATA} /> */}
      <hr />
      <BoxColorGame boxCount={BOX_COUNT} />
    </div>
  );
}

export default App;
