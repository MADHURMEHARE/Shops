"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
const { cart, clearCart } = useCart();
  const router = useRouter();

  const [address, setAddress] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePlaceOrder = () => {
    if (!address) {
      alert("Please enter delivery address");
      return;
    }

   router.push("/order-success");
    clearCart();

    

  };

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <h2 className="text-xl text-gray-600">
          Your cart is empty
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">

      {/* Address Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Delivery Address</h2>

        <textarea
          className="w-full border rounded-lg p-3"
          rows="4"
          placeholder="Enter your delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      {/* Order Summary */}
      <div className="border p-4 rounded-lg">

        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        <div className="space-y-2">

          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.name} × {item.qty}
              </span>

              <span>
                ₹{item.price * item.qty}
              </span>
            </div>
          ))}

        </div>

        <div className="border-t mt-4 pt-4 flex justify-between font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Place Order
        </button>

      </div>

    </div>
  );
}