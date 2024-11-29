import React from "react";

const ALL_SIDES = [
  "digit-square-border-top",
  "digit-square-border-left",
  "digit-square-border-right",
  "digit-square-border-bottom",
];

const NUMBER_TO_CLASSES = {
  0: {
    top: [
      "digit-square-border-top",
      "digit-square-border-left",
      "digit-square-border-right",
    ],
    bottom: [
      "digit-square-border-bottom",
      "digit-square-border-left",
      "digit-square-border-right",
    ],
  },
  1: {
    top: ["digit-square-border-right"],
    bottom: ["digit-square-border-right"],
  },
  2: {
    top: [
      "digit-square-border-top",
      "digit-square-border-right",
      "digit-square-border-bottom",
    ],
    bottom: [
      "digit-square-border-top",
      "digit-square-border-left",
      "digit-square-border-bottom",
    ],
  },
  3: {
    top: [
      "digit-square-border-top",
      "digit-square-border-right",
      "digit-square-border-bottom",
    ],
    bottom: [
      "digit-square-border-top",
      "digit-square-border-right",
      "digit-square-border-bottom",
    ],
  },
  4: {
    top: [
      "digit-square-border-left",
      "digit-square-border-right",
      "digit-square-border-bottom",
    ],
    bottom: ["digit-square-border-right", "digit-square-border-top"],
  },
  5: {
    top: [
      "digit-square-border-top",
      "digit-square-border-left",
      "digit-square-border-bottom",
    ],
    bottom: [
      "digit-square-border-top",
      "digit-square-border-right",
      "digit-square-border-bottom",
    ],
  },
  6: {
    top: [
      "digit-square-border-top",
      "digit-square-border-left",
      "digit-square-border-bottom",
    ],
    bottom: ALL_SIDES,
  },
  7: {
    top: ["digit-square-border-top", "digit-square-border-right"],
    bottom: ["digit-square-border-right"],
  },
  8: {
    top: ALL_SIDES,
    bottom: ALL_SIDES,
  },
  9: {
    top: ALL_SIDES,
    bottom: [
      "digit-square-border-top",
      "digit-square-border-right",
      "digit-square-border-bottom",
    ],
  },
};
const Digit = ({ number }) => {
  const { top, bottom } = NUMBER_TO_CLASSES[number];
  return (
    <div>
      <div
        className={["digit-square", "digit-square-top", ...top].join(" ")}
      ></div>
      <div
        className={["digit-square", "digit-square-bottom", ...bottom].join(" ")}
      ></div>
    </div>
  );
};

export default Digit;
