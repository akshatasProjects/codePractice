import React from "react";

function Ten_ListItems() {
  const items = ["Apple", "Banana", "Cherry", "Date", "ElderBerry"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
export default Ten_ListItems;
