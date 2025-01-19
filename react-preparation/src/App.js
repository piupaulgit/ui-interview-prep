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
import AccordionPage from "./Pages/accordion/AccordionPage";
import DiceRoller from "./Pages/diceRoller/DiceRoller";
import FileExplorarPlage from "./Pages/fileExplorar/FileExplorarPlage";
import GridLights from "./Pages/gridLights/GridLights";
import CustomHooks from "./Pages/customHooks/CustomHooks";
import HigherOrderComponent from "./Pages/higherOrderComponent/HigherOrderComponent";
import ProgressBarThree from "./Pages/progressBarThree/ProgressBarThree";
import StarRatingPage from "./Pages/starRating/StarRatingPage";
import TicTacToe from "./Pages/tictactoe/TicTacToe";
import ConnectFourGame from "./Pages/connectFourGame/ConnectFourGame";
import InfiniteScrollList from "./Pages/infiniteScrollList/InfiniteScrollList";
import VirtualScroll from "./Pages/virtualScroll/VirtualScroll";
import Debounce from "./Pages/debunceWithReact/Debounce";
import PhoneNumberValidation from "./Pages/phoneNumberValidation/PhoneNumberValidation";
import Pagination from "./Pages/pagination/Pagination";
import SingleMultiSelectPage from "./Pages/singleMultiSelect/SingleMultiSelectPage";
import RealClock from "./Pages/realClock/RealClock";
import NestedCheckBox from "./Pages/nestedCheckbox/NestedCheckBox";

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
              <Route path="/accordionPage" element={<AccordionPage />} />
              <Route path="/diceRoller" element={<DiceRoller />} />
              <Route path="/fileExplorar" element={<FileExplorarPlage />} />
              <Route path="/gridLights" element={<GridLights />} />
              <Route path="/customHooks" element={<CustomHooks />} />
              <Route
                path="/higherOrderComponent"
                element={<HigherOrderComponent />}
              />
              <Route path="/progressBarThree" element={<ProgressBarThree />} />
              <Route path="/starRating" element={<StarRatingPage />} />
              <Route path="/tictactoe" element={<TicTacToe />} />
              <Route path="/connectFourGame" element={<ConnectFourGame />} />
              <Route path="/infiniteScroll" element={<InfiniteScrollList />} />
              <Route path="/virtualScroll" element={<VirtualScroll />} />
              <Route path="/debounceWithReact" element={<Debounce />} />
              <Route
                path="/phoneNumberValidation"
                element={<PhoneNumberValidation />}
              />
              <Route path="/pagination" element={<Pagination />} />
              <Route
                path="/singleMultiSelect"
                element={<SingleMultiSelectPage />}
              />
              <Route path="/realClock" element={<RealClock />} />
              <Route path="/nestedCheckbox" element={<NestedCheckBox />} />
            </Routes>
          </MainBody>
        </main>
      </Router>
    </div>
  );
}

export default App;
