import { useState } from "react";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={styles} className="App">
      <div className="container">
        <About />
        <button onClick={handleClick}>Click me</button>
        <div>{count}</div>
      </div>
    </div>
  );
}

export default App;
