"use client";

import Link from "next/link";
import { ShoppingCart, User, Search } from "lucide-react";
import Logo from "./Animation/Logo";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">

      {/* Top Section */}
      <div className="flex items-center px-8 py-4 gap-6">

        {/* Logo */}
        <div className="w-[180px]">
          <Logo />
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center border rounded-lg px-3 py-2 w-full max-w-xl">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="ml-2 w-full outline-none"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 w-[200px] justify-end">

          <Link href="/account" className="flex items-center gap-1">
            <User size={20} />
            <span>Account</span>
          </Link>

          <Link href="/cart" className="flex items-center gap-1">
            <ShoppingCart size={20} />
            <span>Cart</span>
          </Link>

        </div>

      </div>

      {/* Bottom Category Menu */}
      <div className="flex gap-8 px-8 py-3 border-t text-gray-700 text-sm font-medium">
        <Link href="/home">Home</Link>
        <Link href="/product">Grocery</Link>
      </div>

    </nav>
  );
}