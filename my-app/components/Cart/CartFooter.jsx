"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartFooter({ setOpen }) {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="absolute bottom-0 w-full border-t p-4 bg-white">
      <div className="flex justify-between font-bold mb-3">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <Link href="/checkout">
        <button
          onClick={() => setOpen(false)}
          className="w-full bg-green-500 text-white py-2 rounded-lg"
        >
          Checkout
        </button>
      </Link>
    </div>
  );
}