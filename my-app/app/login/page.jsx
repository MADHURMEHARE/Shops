"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email);

    router.push("/");
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
          Anandwan Login
        </h2>

        <input
          type="email"
          placeholder="Enter email"
          className="w-full border px-3 py-2 rounded-md mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md"
        >
          Login
        </button>
      </form>

    </div>
  );
}