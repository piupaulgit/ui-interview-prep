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
            </Routes>
          </MainBody>
        </main>
      </Router>
    </div>
  );
}

export default App;
