import React, { useState } from "react";

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (number) => {
    let digits = "";

    for (let char of number) {
      if (char >= "0" && char <= "9") {
        digits += char;
      }
    }

    let formatted = "";

    if (digits.length > 0) {
      formatted += `(${digits.substring(0, 3)}`;
    }

    if (digits.length > 3) {
      formatted += `) ${digits.substring(3, 6)}`;
    }

    if (digits.length > 6) {
      formatted += `-${digits.substring(6, 10)}`;
    }

    return formatted;
  };

  const handleChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedPhoneNumber);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text");
    const formattedNumber = formatPhoneNumber(pastedData);
    setPhoneNumber(formattedNumber);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="(XXX) XXX-XXXX"
        onPaste={handlePaste}
        maxLength={14}
        value={phoneNumber}
        style={{ fontSize: "18px", padding: "10px", width: "250px" }}
      />
    </div>
  );
};

const PhoneNumberValidation = () => {
  return (
    <div>
      <h2>Phone Number Validation</h2>
      <PhoneInput />
    </div>
  );
};

export default PhoneNumberValidation;
