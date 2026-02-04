import React from "react";

function CartItem({ name, price, quantity, increment, decrement, reset }) {
  const bgColor =
    name === "Mobile"
      ? "#E3F2FD"
      : name === "Headphones"
      ? "#a3a69b"
      : "#eee8f5";

  return (
    <div
      style={{
        backgroundColor: bgColor,
        border: "2px solid #282527",
        padding: "20px",
        width: "280px",
        margin: "20px auto",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(18, 17, 17, 0.2)",
      }}
    >
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>Quantity: {quantity}</p>
      <p>Item Total: ₹{price * quantity}</p>

      <button onClick={increment}>+</button>
      <button
        onClick={decrement}
        disabled={quantity === 0}
        style={{ margin: "0 10px" }}
      >
        -
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CartItem;