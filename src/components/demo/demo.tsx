import { useState } from "react";

const Demo = ({ message = "hello world!!!" }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {message}
      <p>Counter: {counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Demo;
