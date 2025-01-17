import React from "react";
import SingleMultiSelectComponent from "./SingleMultiSelectComponent";
import "./SingleMultiSelectPage.css";

const SingleMultiSelectPage = () => {
  const options = [
    { id: "1", label: "Apple", selected: false },
    { id: "2", label: "Banana", selected: true },
    { id: "3", label: "Cherry", selected: true },
    { id: "4", label: "Date", selected: false },
    { id: "5", label: "Elderberry", selected: false },
  ];

  const handleSingleChange = (value) => {
    console.log("Single Select Value:", value);
  };

  const handleMultiChange = (values) => {
    console.log("Multi-Select Values:", values);
  };

  return (
    <div>
      {/* single select */}
      <SingleMultiSelectComponent
        isMulti={false}
        options={options}
        onChange={handleSingleChange}
        placeholder="Choose one option"
      />
      {/* multi select */}
      <SingleMultiSelectComponent
        isMulti={true}
        options={options}
        onChange={handleMultiChange}
        placeholder="Choose multiple options"
      />
    </div>
  );
};

export default SingleMultiSelectPage;
