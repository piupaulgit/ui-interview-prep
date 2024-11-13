import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./ModalComponent.css";

const ModalComponent = ({ isOpen, children, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleEscape = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    isOpen && (
      <div
        className="modal-overlay"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-header"
      >
        <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    ),
    document.getElementById("react-portal-content")
  );
};

const ModalHeader = ({ onClose, children }) => {
  return (
    <div className="modal-header">
      <div>{children}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const ModalBody = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};

const ModalFooter = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};

ModalComponent.Header = ModalHeader;
ModalComponent.Body = ModalBody;
ModalComponent.Footer = ModalFooter;

export default ModalComponent;
