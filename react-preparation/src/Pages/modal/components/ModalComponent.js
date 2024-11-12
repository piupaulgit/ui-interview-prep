import React from "react";
import ReactDOM from "react-dom";

const ModalComponent = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("react-portal-content")
  );
};

const ModalHeader = ({ children }) => {
  return <div>{children}</div>;
};

const ModalBody = ({ children }) => {
  return <div>{children}</div>;
};

const ModalFooter = ({ children }) => {
  return <div>{children}</div>;
};

ModalComponent.Header = ModalHeader;
ModalComponent.Body = ModalBody;
ModalComponent.Footer = ModalFooter;

export default ModalComponent;
