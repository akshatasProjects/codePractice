import React, { useState } from "react";

function Three_ToggleBtn() {
  const [isOn, setIsOn] = useState(false); // isOn = false

  const toggleState = () => {
    setIsOn((prevState) => !prevState); // false = True
  };

  return <button onClick={toggleState}>{isOn ? "ON" : "OFF"}</button>;
}

export default Three_ToggleBtn;
