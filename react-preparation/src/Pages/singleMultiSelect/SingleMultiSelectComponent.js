import React, { useState } from "react";

const SingleMultiSelectComponent = ({
  isMulti,
  options,
  placeholder,
  onChange,
}) => {
  const [selectedOptions, setSelectedOptions] = useState(
    isMulti
      ? options.filter((option) => option.selected).map((option) => option.id)
      : options.find((option) => option.selected)?.id || null
  );

  const isSelected = (option) => {
    return isMulti
      ? selectedOptions.includes(option.id)
      : selectedOptions === option.id;
  };

  const handleSelect = (option) => {
    if (isMulti) {
      if (selectedOptions.includes(option.id)) {
        const updatedOptions = selectedOptions.filter((id) => id !== option.id);
        setSelectedOptions(updatedOptions);
        onChange && onChange(updatedOptions);
      } else {
        const updatedOptions = [...selectedOptions, option.id];
        setSelectedOptions(updatedOptions);
        onChange && onChange(updatedOptions);
      }
    } else {
      setSelectedOptions(option.id);
      onChange && onChange(option.id);
    }
  };
  return (
    <div className="multi-select-container">
      <p>{placeholder}</p>
      <ul>
        {options.length > 0 &&
          options.map((option, index) => {
            return (
              <li key={option.id}>
                <label>
                  <input
                    type={isMulti ? "checkbox" : "radio"}
                    name="select"
                    value={option.id}
                    onChange={() => handleSelect(option)}
                    checked={isSelected(option)}
                  />
                  {option.label}
                </label>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SingleMultiSelectComponent;
