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
        </ul>
      </nav>
    </div>
  );
};
export default SideBar;
