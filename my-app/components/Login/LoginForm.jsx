"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function LoginForm(children) {
  const { mode, user, handleChange, handleSubmit } = children;

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Email */}
      <input
        type="text"
        onChange={handleChange}
        name="username"
        value={user.username}
        placeholder="Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-200"
      />

      {/* Password */}
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={user.password}
        placeholder="Password"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-200"
      />

      {/* Confirm Password (Signup only) */}
      {mode === "signup" && (
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={user.confirmPassword}
          placeholder="Confirm Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-200"
        />
      )}

      {/* Button */}
      <button
        type="submit"
        className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        {mode === "login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
}

export default LoginForm;
