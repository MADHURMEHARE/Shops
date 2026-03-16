"use client";

import { useCart } from "@/context/CartContext";

export default function CartItem({ item }) {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <div className="flex gap-3 items-center border-b pb-3">
      <img
        src={item.image}
        alt={item.name}
        className="w-14 h-14 object-cover rounded"
      />

      <div className="flex-1">
        <p className="text-sm font-semibold">{item.name}</p>
        <p className="text-sm">₹{item.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQty(item.id)}
          className="px-2 bg-gray-200 rounded"
        >
          -
        </button>

        <span>{item.qty}</span>

        <button
          onClick={() => increaseQty(item.id)}
          className="px-2 bg-gray-200 rounded"
        >
          +
        </button>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 text-sm"
      >
        ✕
      </button>
    </div>
  );
}