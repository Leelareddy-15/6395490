import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

export default function App() {
  const [count, setCount] = useState(0);

  const incrementValue = () => setCount(count + 1);
  const sayHello = () => alert("Hello! This is a static message.");

  const decrementValue = () => setCount(count - 1);

  const sayWelcome = (msg) => alert(msg);

  const handleSyntheticEvent = () => alert("I was clicked");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Counter: {count}</h2>

      <button onClick={() => { incrementValue(); sayHello(); }}>Increment</button>
      <br /><br />

      <button onClick={decrementValue}>Decrement</button>
      <br /><br />

      <button onClick={() => sayWelcome("Welcome to React!")}>Say welcome</button>
      <br /><br />

      <button onClick={handleSyntheticEvent}>Click on me</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}
