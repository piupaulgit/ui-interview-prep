import React, { useState } from "react";
import "./accordion.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const accordionData = [
  {
    label: "html",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    label: "css",
    content:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    label: "js",
    content:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];
const Accordion = ({ data }) => {
  const [activeAccordions, setActiveAccordions] = useState(new Set());

  const handleAccordionToggle = (label) => {
    const newActiveAccordions = new Set(activeAccordions);
    newActiveAccordions.has(label)
      ? newActiveAccordions.delete(label)
      : newActiveAccordions.add(label);

    setActiveAccordions(newActiveAccordions);
  };
  return (
    <div className="accordion-holder">
      {data.length > 0 &&
        data.map((item, index) => {
          let isExpanded = activeAccordions.has(item.label);
          return (
            <div key={index} className="accordion-content">
              <button
                aria-expanded={isExpanded}
                onClick={() => handleAccordionToggle(item.label)}
                className={`${isExpanded && "active"}`}
              >
                {item.label}
                <span>
                  {isExpanded && <BsChevronDown />}
                  {!isExpanded && <BsChevronUp />}
                </span>
              </button>
              <div hidden={!isExpanded}>{item.content}</div>
            </div>
          );
        })}
    </div>
  );
};

const AccordionPage = () => {
  return (
    <div>
      <h2>Accordion</h2>
      <Accordion data={accordionData} />
    </div>
  );
};

export default AccordionPage;
