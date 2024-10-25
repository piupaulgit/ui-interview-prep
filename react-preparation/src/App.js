import "./App.css";
import SideBar from "./components/mainAppComponents/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainBody from "./components/mainAppComponents/MainBody";
import Home from "./Pages/Home";
import GoogleCalendar from "./Pages/googleCalendar/GoogleCalendar";
import TypeAheadAutoComplete from "./Pages/typeAheadAutoComplete/TypeAheadAutoComplete";

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
            </Routes>
          </MainBody>
        </main>
      </Router>
    </div>
  );
}

export default App;
