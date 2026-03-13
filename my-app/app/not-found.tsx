"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-6">

      {/* Animated 404 */}
      <h1 className="text-7xl font-extrabold text-green-600 animate-bounce">
        404
      </h1>

      {/* Brand Name */}
      <h2 className="text-3xl font-bold mt-4">
        Anandwan
      </h2>

      {/* Message */}
      <p className="text-gray-600 mt-3 max-w-md">
        Oops! The product or page you are looking for doesn't exist.  
        But don't worry — there are plenty of amazing things waiting for you at Anandwan.
      </p>

      {/* Illustration */}
      <div className="mt-10 text-6xl animate-pulse">
        🛒
      </div>

      {/* Button */}
      <Link
        href="/home"
        className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Back to Shopping
      </Link>

      {/* Footer */}
      <p className="mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} Anandwan
      </p>

    </div>
  );
}