import React, { useId, useState } from "react";
import { data } from "./data.js";
import "./nestedCheckbox.css";

const Checkbox = ({ name, checked, onChange, id }) => {
  const inputId = useId();
  return (
    <label>
      <input
        type="checkbox"
        id={inputId}
        checked={checked}
        onChange={() => onChange(id, !checked)}
      />
      <span>{name}</span>
    </label>
  );
};

const Checkboxes = ({ data, onCheckChange }) => {
  return (
    <ul className="checkbox-holder">
      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <li key={item.id}>
              <Checkbox {...item} onChange={onCheckChange} />
              {item.children && item.children.length > 0 && (
                <Checkboxes
                  data={item.children}
                  onCheckChange={onCheckChange}
                />
              )}
            </li>
          );
        })}
    </ul>
  );
};

const NestedCheckBox = () => {
  const [checkboxData, setCheckboxData] = useState(data);

  const handleOnCheckChange = (id, checked) => {
    const updateCheckedItems = (data) => {
      data.map((item) => {
        return {
          ...item,
          checked,
          children: item.children && updateCheckedItems(item.children),
        };
      });
    };
  };

  return <Checkboxes data={checkboxData} onCheckChange={handleOnCheckChange} />;
};

export default NestedCheckBox;
