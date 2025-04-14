import React, { useState } from "react";

function Five_Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count < 0 ? "Invalid" : ""}
    </div>
  );
}

export default Five_Counter;
