import "./sidebar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/googleCalendar">Google Calendar</Link>
          </li>
          <li>
            <Link to="/typeAheadAutoComplete">Type Ahead/ auto complete</Link>
          </li>
          <li>
            <Link to="/notification">Notification</Link>
          </li>
          <li>
            <Link to="/modal">Modal</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default SideBar;
