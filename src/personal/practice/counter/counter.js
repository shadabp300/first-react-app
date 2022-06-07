import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <center >
      <div >{counter}</div>
      <div>
        <button onClick={Increment}>Increment</button>

        <button onClick={Decrement}>Decrement</button>
      </div>
    </center>
  );
};
export default Counter;
