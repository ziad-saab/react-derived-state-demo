import { useEffect, useState } from "react";

export const DryComponent = () => {
  const [counter, setCounter] = useState(0);
  // The following variable is derived from state
  const isGreaterThan5 = counter > 5;

  const reset = () => {
    setCounter(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // Using the function version of setState prevents closing around counter
      // and having to add it to the useEffect's dependency array
      setCounter((c) => c + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>DRY Component</h1>
      <p>Counter: {counter}</p>
      <p>Greater than 5: {isGreaterThan5 ? "true" : "false"}</p>
      <p>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
};
