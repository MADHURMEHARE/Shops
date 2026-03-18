"use client";

import { useState } from "react";

export default function LoginForm2() {
  const [mode, setMode] = useState("login");
  const [role, setRole] = useState("user");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md px-4">
        {/* Tabs */}
        <div className="flex">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 py-2 text-center border border-gray-300 rounded-t-lg ${
              mode === "login"
                ? "bg-white text-gray-900 border-b-white"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setMode("signup")}
            className={`flex-1 py-2 text-center border border-gray-300 rounded-t-lg ${
              mode === "signup"
                ? "bg-white text-gray-900 border-b-white"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* PANEL */}
        <div className="bg-white border border-gray-300 rounded-b-lg p-6 shadow-sm">
          {/* Role Toggle */}
          {mode === "login" && (
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setRole("admin")}
                className={`flex-1 py-2 rounded-lg text-gray-800 ${
                  role === "admin"
                    ? "border-b-2 border-green-600"
                    : "border bg-white text-gray-800 border-gray-300"
                }`}
              >
                Admin
              </button>

              <button
                onClick={() => setRole("user")}
                className={`flex-1 py-2 rounded-lg text-gray-800 ${
                  role === "user"
                    ? "border-b-2 border-green-600"
                    : "border bg-white border-gray-300"
                }`}
              >
                User
              </button>
            </div>
          )}

          <h2 className="text-lg font-bold mb-4 text-center text-gray-800">
            {mode === "login" ? "Login to your account" : "Create an account"}
          </h2>

          <form className="space-y-4">
            {/* Email */}
            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-200"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-200"
            />

            {/* Confirm Password (Signup only) */}
            {mode === "signup" && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-200"
              />
            )}

            {/* Button */}
            <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              {mode === "login" ? "Login" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
