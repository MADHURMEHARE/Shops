"use client";

import Link from "next/link";
import { ShoppingCart, User, Search } from "lucide-react";
import Logo from "../Animation/Logo";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/Cart/CartDrawer";
import { useState } from "react";
export default function Navbar() {
  const { user, logout } = useAuth();
const [cartOpen, setCartOpen] = useState(false);
const { cart } = useCart();
const cartCount = cart.reduce((total:any, item:any) => total + item.qty, 0);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">

      {/* TOP SECTION */}
      <div className="flex flex-wrap items-center justify-between px-4 md:px-8 py-3 gap-3">

        {/* Logo + Milk Image */}
        <div className="flex items-center gap-2 w-[160px] md:w-[200px]">
          <Logo />

          <img
            src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200"
            alt="Fresh Milk"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>

        {/* Search */}
        <div className="order-3 md:order-2 w-full md:w-auto flex justify-center">
          <div className="flex items-center border rounded-lg px-3 py-2 w-full md:w-[400px]">
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search for milk, dairy..."
              className="ml-2 w-full outline-none text-sm"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-6 order-2 md:order-3">
    
          {/* Account/Login */}
          {user ? (
            <button
              onClick={logout}
              className="flex items-center gap-1 text-red-500"
            >
              <User size={20} />
              <span className="hidden md:inline">Logout</span>
            </button>
          ) : (
            <Link href="/login" className="flex items-center gap-1">
              <User size={20} />
              <span className="hidden md:inline">Login</span>
            </Link>
          )}

          {/* Cart */}
  <button
  onClick={() => setCartOpen(true)}
  className="flex items-center gap-1 relative"
>
  <ShoppingCart size={20} />
  {cartCount > 0 && (
    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1 rounded">
      {cartCount}
    </span>
  )}
  <span className="hidden md:inline">Cart</span>
</button>
        </div>

      </div>

      {/* CATEGORY MENU */}
      <div className="flex gap-6 md:gap-8 px-4 md:px-8 py-3 border-t text-gray-700 text-sm font-medium overflow-x-auto">
        <Link href="/">Home</Link>
        <Link href="/product">🥛 Milk Products</Link>
  {user && (
  <Link href="/orders">
    Orders
  </Link>
)}
      </div>
<CartDrawer open={cartOpen} setOpen={setCartOpen} />
    </nav>
  );
}