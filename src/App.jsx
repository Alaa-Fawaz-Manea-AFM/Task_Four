import { useState } from "react";

function App() {
  // question : 1
  const [count, setCount] = useState(0);

  const increment = () => setCount((pre) => pre + 1);

  // question : 2
  const text = "Hello Web Masters";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {/* question : 1  */}
      <div>
        <h3
          style={{
            fontSize: "50px",
          }}
        >
          Count: <span style={{ color: "red" }}>{count}</span>
        </h3>
        <button
          onClick={increment}
          style={{
            padding: "15px 50px",
            backgroundColor: "green",
            color: "white",
            fontSize: "20px",
            borderRadius: "5px",
          }}
        >
          Increase
        </button>
      </div>

      {/* question : 2  */}
      <div>
        <h1>Parent Component</h1>
        <ChildComponent message={text} />
      </div>
    </div>
  );
}

export default App;

const ChildComponent = ({ message }) => (
  <h3
    style={{
      fontSize: "20px",
    }}
  >
    {message}
  </h3>
);
