import React, { useState } from "react";
import PageHeader from "../../components/mainAppComponents/PageHeader";
import SearchResult from "./Components/SearchResult";
import "./typeAheadAutoComplete.css";
import { debounce, getResult } from "./util";

const TypeAheadAutoComplete = () => {
  const [fruits, setFruits] = useState([]);
  const [selectedValue, setSelectedvalue] = useState("");

  // Debounced API call
  const fetchResults = debounce(async (inputValue) => {
    if (inputValue) {
      const res = await getResult(inputValue);
      setFruits(res);
    } else {
      setFruits([]);
    }
  }, 600);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSelectedvalue(inputValue); // Update input value immediately

    // Call the debounced fetchResults function
    fetchResults(inputValue);
  };

  const handleSelectedvalue = (val) => {
    setSelectedvalue(val); // Set the selected fruit in the input
    setFruits([]);
  };

  return (
    <div className="type-ahead">
      <PageHeader text="Type Ahead / Auto Complete Search bar" />
      <input
        type="text"
        placeholder="start typing..."
        value={selectedValue} // Controlled input value
        onChange={handleChange} // No debounce here
      />
      {fruits.length > 0 && (
        <SearchResult result={fruits} onClickOption={handleSelectedvalue} />
      )}
    </div>
  );
};

export default TypeAheadAutoComplete;
