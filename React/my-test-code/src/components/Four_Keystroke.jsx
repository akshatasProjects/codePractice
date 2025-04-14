import React, { useState } from "react";

function Four_Keystroke() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='p-4'>
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder='type something'
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}
export default Four_Keystroke;
