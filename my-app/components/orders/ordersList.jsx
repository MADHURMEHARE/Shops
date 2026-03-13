"use client";

import { useState } from "react";
import OrderCard from "./OrderCard";

export default function OrdersList({ orders }) {

  const ORDERS_PER_PAGE = 5;

  const [page, setPage] = useState(1);

  const start = (page - 1) * ORDERS_PER_PAGE;
  const end = start + ORDERS_PER_PAGE;

  const visibleOrders = orders.slice(start, end);

  const totalPages = Math.ceil(orders.length / ORDERS_PER_PAGE);

  return (
    <div className="space-y-6">

      {visibleOrders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-6">

        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-3 py-1">
          Page {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>

      </div>

    </div>
  );
}