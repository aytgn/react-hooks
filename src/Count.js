import React, { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked count: ${count} times`;
  });

  function clickHandle() {
    setCount(count + 1);
  }

  return (
    <div>
      <h4>Hello from Count Component</h4>
      <p2>Count is: {count}</p2>
      <br />
      <div>
        <button onClick={clickHandle}>INCREMENT</button>
      </div>
    </div>
  );
}

export default Count;
