import { useEffect, useState } from "react";

export const WetComponent = () => {
  const [counter, setCounter] = useState(0);
  const [isGreaterThan5, setIsGreaterThan5] = useState(false);

  const reset = () => {
    // Always have to update two states
    setCounter(0);
    setIsGreaterThan5(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // Always have to update two states
      setCounter(counter + 1);
      setIsGreaterThan5(counter > 5);
    }, 1000);

    return () => clearInterval(timer);

    // We have to add counter to the useEffect's dependency array
    // because we're using it inside the closure passed to setInterval.
    // This means every time counter changes, the useEffect function will
    // be re-run, keeping the correct value of counter in the closure
    // 
    // To test this, remove counter from the dependency array, then
    // reload the app.
  }, []);

  return (
    <div>
      <h1>NON-DRY Component</h1>
      <p>Counter: {counter}</p>
      <p>Greater than 5: {isGreaterThan5 ? "true" : "false"}</p>
      <p>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
};
