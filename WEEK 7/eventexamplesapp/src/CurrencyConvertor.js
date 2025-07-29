import React, { useState } from "react";

export default function CurrencyConvertor() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const euroValue = parseFloat(amount) * 80; // Example: 1 Euro = ₹80
    alert(`Converting to Euro Amount is ${euroValue}`);
  };

  return (
    <div>
      <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount: </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label>Currency: </label>
          <input type="text" value="Euro" readOnly />
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
