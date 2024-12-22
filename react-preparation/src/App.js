import "./App.css";
import SideBar from "./components/mainAppComponents/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainBody from "./components/mainAppComponents/MainBody";
import Home from "./Pages/Home";
import GoogleCalendar from "./Pages/googleCalendar/GoogleCalendar";
import TypeAheadAutoComplete from "./Pages/typeAheadAutoComplete/TypeAheadAutoComplete";
import Notification from "./Pages/notification/Notification";
import Modal from "./Pages/modal/Modal";
import TrafficLight from "./Pages/trafficLight/TrafficLight";
import DigitalClock from "./Pages/digitalClock/DigitalClock";
import TabPage from "./Pages/tabs/TabPage";
import ImageCarouselPage from "./Pages/imageCarousel/ImageCarouselPage";
import FlightBooker from "./Pages/flightBooker/FlightBooker";
import GenerateTable from "./Pages/generateTable/GenerateTable";
import ProgressBarPage from "./Pages/progressBar/ProgressBarPage";
import ProgressBar2 from "./Pages/progressBar2/ProgressBar2";
import TemparatureConvertor from "./Pages/temparatureConvertor/TemparatureConvertor";
import MortgageCalculator from "./Pages/mortgageCalculator/MortgageCalculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">Header will be updated later</header>
      <Router>
        <main>
          <SideBar />
          <MainBody>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/googleCalendar" element={<GoogleCalendar />} />
              <Route
                path="/typeAheadAutoComplete"
                element={<TypeAheadAutoComplete />}
              />
              <Route path="/notification" element={<Notification />} />
              <Route path="/modal" element={<Modal />} />
              <Route path="/trafficLight" element={<TrafficLight />} />
              <Route path="/digitalClock" element={<DigitalClock />} />
              <Route path="/tabs" element={<TabPage />} />
              <Route path="/imageCarousel" element={<ImageCarouselPage />} />
              <Route path="/flightBooker" element={<FlightBooker />} />
              <Route path="/generatetable" element={<GenerateTable />} />
              <Route path="/progressbar" element={<ProgressBarPage />} />
              <Route path="/progressbar2" element={<ProgressBar2 />} />
              <Route
                path="/temparatureConvertor"
                element={<TemparatureConvertor />}
              />
              <Route
                path="/mortgagecalculator"
                element={<MortgageCalculator />}
              />
            </Routes>
          </MainBody>
        </main>
      </Router>
    </div>
  );
}

export default App;
