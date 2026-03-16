"use client";

import { useEffect, useState } from "react";
import OrdersList from "@/components/orders/ordersList";

export default function OrdersPage() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const storedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(storedOrders.reverse());

  }, []);

  if (orders.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <h2 className="text-xl text-gray-600">
          No orders yet
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        Your Orders
      </h1>

      <OrdersList orders={orders} />

    </div>
  );
}