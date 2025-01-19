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
  {
    url: "progressBarThree",
    label: "Progress Bar Three",
  },
  {
    url: "temparatureConvertor",
    label: "Temparature Convertor",
  },
  {
    url: "mortgageCalculator",
    label: "Mortgage Calculator",
  },
  {
    url: "accordionPage",
    label: "Accordion",
  },
  {
    url: "diceRoller",
    label: "Dice Roller",
  },
  {
    url: "fileExplorar",
    label: "File Explorar",
  },
  {
    url: "gridLights",
    label: "Grid Lights",
  },
  {
    url: "customHooks",
    label: "Custom Hooks",
  },
  {
    url: "higherOrderComponent",
    label: "Higher Order Component",
  },
  {
    url: "starRating",
    label: "Star Rating",
  },
  {
    url: "tictactoe",
    label: "Tic-Tac-Toe",
  },
  {
    url: "connectFourGame",
    label: "Connect Four Game",
  },
  {
    url: "infiniteScroll",
    label: "Infinite Scroll List",
  },
  {
    url: "virtualScroll",
    label: "Virtual Scroll",
  },
  {
    url: "debounceWithReact",
    label: "Debounce With React",
  },
  {
    url: "phoneNumberValidation",
    label: "Phone Number Validation",
  },
  {
    url: "pagination",
    label: "Pagination",
  },
  {
    url: "singleMultiSelect",
    label: "Single or Multi Select",
  },
  {
    url: "realClock",
    label: "Real Clock",
  },
  {
    url: "nestedCheckbox",
    label: "Nested Checkbox",
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
