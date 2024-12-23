import React from "react";

const useForm = (initialValue) => {
  const [values, setValues] = React.useState(initialValue);
  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (validationRules) => {
    const newErrors = {};
    Object.keys(validationRules).forEach((field) => {
      if (!validationRules[field](values[field])) {
        newErrors[field] = `${field} is invalid`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { values, errors, handleChange, validate };
};

export default useForm;
