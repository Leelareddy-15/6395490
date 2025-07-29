import React from "react";

function App() {
  const element = "Office Space";

  const sr = "https://cdn.sanity.io/images/uqxwe2qj/production/62db3c671745e98cb27690dff96f8033d2bb7f35-2048x1010.jpg?q=80&auto=format&fit=clip&w=1440"; // replace with actual image URL

  const ItemName = { Name: "DBS", Rent: 50000, Address: "Chennai" };

  // Set color class dynamically
  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push("textRed");
  } else {
    colors.push("textGreen");
  }

  const jsxatt = (
    <img src={sr} width="25%" height="25%" alt="Office Space" />
  );

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>
        {element} , at Affordable Range
      </h1>

      {jsxatt}

      <h1>Name: {ItemName.Name}</h1>

      <h3 className={colors.join(" ")}>
        Rent: Rs. {ItemName.Rent}
      </h3>

      <h3>Address: {ItemName.Address}</h3>

      {/* Inline CSS for text colors */}
      <style>{`
        .textRed { color: red; }
        .textGreen { color: green; }
      `}</style>
    </div>
  );
}

export default App;
