import { useState } from "react";

function App() {
  return (
    <div>
      <h1>Welcome to the Counter App</h1>
      <Counter title="Main Counter" />
    </div>
  );
}

function Counter({ title }) {
  // 1️⃣ Create a count variable that starts at 0
  const [count, setCount] = useState(0);

  // 2️⃣ Function to increase the number
  const handleIncrease = () => {
    setCount(count + 1);
  };

  // 3️⃣ Function to reset the number
  const handleReset = () => {
    setCount(0);
  };

  // 4️⃣ Show everything on screen
  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;

