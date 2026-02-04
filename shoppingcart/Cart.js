import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "Mobile", price: 15000, quantity: 0 },
    { id: 2, name: "Headphones", price: 2000, quantity: 0 },
    { id: 3, name: "Keyboard", price: 1200, quantity: 0 },
  ]);

  const incrementQuantity = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const resetQuantity = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: 0 } : item
      )
    );
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🛒 Shopping Cart</h1>

      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          increment={() => incrementQuantity(item.id)}
          decrement={() => decrementQuantity(item.id)}
          reset={() => resetQuantity(item.id)}
        />
      ))}

      <h2>Total Cart Price: ₹{totalPrice}</h2>
    </div>
  );
}

export default Cart;