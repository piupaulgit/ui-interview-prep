import React from "react";
import PageHeader from "../../components/mainAppComponents/PageHeader";
import NotificationComponent from "./components/NotificationComponent";

const Notification = () => {
  return (
    <div>
      <PageHeader text="Notification" />
      <NotificationComponent type={"success"} text="message" />
      <div>
        <button>Info</button>
        <button>Warning</button>
        <button>Success</button>
        <button>Error</button>
      </div>
    </div>
  );
};

export default Notification;
