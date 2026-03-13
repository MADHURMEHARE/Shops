"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative text-white text-center py-24 px-6 overflow-hidden">

        {/* Milk Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1550583724-b2692b85b150?w=1600')"
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Anandvan Dairy & Grocery
          </h1>

          <p className="text-lg mb-6">
            Fresh milk and daily essentials from your trusted Anandwan shop
          </p>

          <Link href="/product">
            <button className="bg-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
              Visit our products
            </button>
          </Link>

        </div>

      </section>


      {/* MAIN SECTION */}
      <div className="flex flex-col md:flex-row p-6 md:p-8 gap-8">

        {/* SIDEBAR */}
        <aside className="w-full md:w-60 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>

          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-green-600 cursor-pointer">🥛 Milk Products</li>
            <li className="hover:text-green-600 cursor-pointer">🧀 Dairy</li>
            <li className="hover:text-green-600 cursor-pointer">🍪 Snacks</li>
            <li className="hover:text-green-600 cursor-pointer">🥤 Beverages</li>
          </ul>
        </aside>


        {/* MAIN CONTENT */}
        <main className="flex-1">

          <h2 className="text-2xl font-bold mb-3">
            Welcome to Anandwan Local Shop
          </h2>

          <p className="text-gray-600 mb-6">
            Order fresh milk, dairy products and daily essentials directly
            from your nearby Anandwan trusted shop.
          </p>

          {/* MILK DEAL */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">
              🥛 Today's Milk Offer
            </h3>

            <p className="text-gray-700 mb-4">
              Buy 2L fresh cow milk and get 10% discount.
            </p>

            <Link href="/product">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
              click to visit
              </button>
            </Link>
          </div>

        </main>

      </div>

    </div>
  );
}