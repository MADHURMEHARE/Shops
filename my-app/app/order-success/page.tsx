"use client";

import Link from "next/link";

export default function OrderSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">

      <div className="bg-green-100 p-8 rounded-xl shadow-md max-w-md">

        <div className="text-green-600 text-5xl mb-4">
          ✓
        </div>

        <h1 className="text-2xl font-bold mb-2">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for shopping with Anandwan.  
          Your fresh groceries will arrive soon.
        </p>

        <Link href="/">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
            Continue Shopping
          </button>
        </Link>

      </div>

    </div>
  );
}