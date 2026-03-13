"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart once
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Add product
 const addToCart = (product) => {
  setCart((prevCart) => {
    const existing = prevCart.find((item) => item.id === product.id);

    if (existing) {
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    }

    return [...prevCart, { ...product, qty: 1 }];
  });
};
  // Increase quantity
  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Remove item
  const removeFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);