import { useState, useEffect } from "react";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(
    // parse the localStorage value, since count is a string
    parseInt(localStorage.getItem("count")) || 0,
  );

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
  const increaseCnt = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <div className="container">
        <About />
        <button onClick={increaseCnt}>Click me to increase the count</button>
        <br />
        <div className="circle">{count}</div>
      </div>
    </div>
  );
}

export default App;
