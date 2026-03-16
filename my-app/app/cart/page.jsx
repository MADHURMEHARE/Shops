"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <h2 className="text-xl text-gray-600">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border p-4 rounded-lg"
          >
            <img
              src={item.image}
              className="w-20 h-20 object-cover rounded"
            />

            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p>₹{item.price}</p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-2">

              <button
                onClick={() => decreaseQty(item.id)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>

            </div>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Remove
            </button>

          </div>
        ))}

      </div>

      {/* Total */}
     <div className="mt-6 text-right">

  <h2 className="text-xl font-bold mb-3">
    Total: ₹{total}
  </h2>

  <Link href="/checkout">
    <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
      Proceed to Checkout
    </button>
  </Link>

</div>

    </div>
  );
}
