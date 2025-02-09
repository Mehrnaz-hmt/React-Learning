"use client";

import { useState } from "react";


const SimpleInput = ({ placeholder, onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <div style={{margin:"20px"}}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          style={{ padding: "10px" }}
        />
      </div>
     
    </div>
  );
};





export default SimpleInput;






