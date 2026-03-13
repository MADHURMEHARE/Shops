"use client";

import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const handleAddToCart = () => {
    if (!user) {
      router.push("/login");
      return;
    }

    addToCart(product);
  };

  return (
    <div className="border border-gray-200 rounded-xl p-3 bg-white shadow-sm hover:shadow-md transition">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[180px] object-cover rounded-lg"
      />

      <h3 className="text-black font-semibold mt-3">
        {product.name}
      </h3>

      <p className="text-black font-medium mb-3">
        ₹{product.price}
      </p>

      <button
        onClick={handleAddToCart}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
      >
        Add to Cart
      </button>

    </div>
  );
}