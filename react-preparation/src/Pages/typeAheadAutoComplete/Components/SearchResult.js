import React from "react";
import "./searchResult.css";

const SearchResult = ({ result, onClickOption }) => {
  const handleSelectValue = (event) => {
    console.log(event.target.dataset.key);
    onClickOption(event.target.dataset.key);
  };
  return (
    <div className="search-result">
      <ul>
        {result.map((result, index) => {
          return (
            <li onClick={handleSelectValue} data-key={result} key={index}>
              {result}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchResult;
