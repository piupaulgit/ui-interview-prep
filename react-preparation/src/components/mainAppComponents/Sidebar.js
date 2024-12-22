import "./sidebar.css";
import { Link } from "react-router-dom";

const menuItems = [
  {
    url: "",
    label: "Home",
  },
  {
    url: "googleCalendar",
    label: "Google Calender",
  },
  {
    url: "typeAheadAutoComplete",
    label: "Type Ahead/ auto complete",
  },
  {
    url: "notification",
    label: "Notification",
  },
  {
    url: "modal",
    label: "Modal",
  },
  {
    url: "trafficLight",
    label: "Traffic light",
  },
  {
    url: "digitalClock",
    label: "Digital Clock",
  },
  {
    url: "tabs",
    label: "Tabs",
  },
  {
    url: "imageCarousel",
    label: "Image Carousel",
  },
  {
    url: "flightBooker",
    label: "Flight Booker",
  },
  {
    url: "generateTable",
    label: "Generate Table",
  },
  {
    url: "progressbar",
    label: "Progress Bar",
  },
  {
    url: "progressbar2",
    label: "Progress Bar Two",
  },
];
const SideBar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          {menuItems.length > 0 &&
            menuItems.map((menu, index) => {
              return (
                <li key={index}>
                  <Link to={`/${menu.url}`}>{menu.label}</Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};
export default SideBar;
