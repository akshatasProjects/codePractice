import React from "react";

function Nine_ConditionalRender({ type }) {
  switch (type) {
    case "heading":
      return <h1>This is heading</h1>;

    case "paragraph":
      return <p>This is paragraph</p>;

    case "button":
      return <button>This is button</button>;

    default:
      return <span>Invalid type</span>;
  }
}

export default Nine_ConditionalRender;
