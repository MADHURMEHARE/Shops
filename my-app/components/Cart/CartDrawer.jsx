"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartDrawer({ open, setOpen }) {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[350px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b font-bold text-lg">
          Your Cart
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[75%]">

          {cart.length === 0 && (
            <p className="text-gray-500">Cart is empty</p>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 items-center border-b pb-3"
            >
              <img
                src={item.image}
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
          ))}

        </div>

        {/* Footer */}
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

      </div>
    </>
  );
}