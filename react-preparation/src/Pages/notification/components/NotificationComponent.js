import React from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineClose,
} from "react-icons/ai";
import "./notificationComponent.css";

const icons = {
  info: <AiOutlineInfoCircle />,
  warning: <AiOutlineWarning />,
  success: <AiOutlineCheckCircle />,
  error: <AiOutlineCloseCircle />,
};

const NotificationComponent = ({ type, text, close }) => {
  return (
    <div className={`notification-component ${type}`}>
      <div className="left">
        <span>{icons[type]}</span>
        <p>{text}</p>
      </div>
      <button>
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default NotificationComponent;
