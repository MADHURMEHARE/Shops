"use client";

// import { useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/router";
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function LoginForm2() {
  const [mode, setMode] = useState("login");
  const [role, setRole] = useState("user");
  const [user, setuser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  // const { login } = useAuth();
  // const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
    // router.push("/");
  };

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

          <LoginForm
            mode={mode}
            user={user}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
