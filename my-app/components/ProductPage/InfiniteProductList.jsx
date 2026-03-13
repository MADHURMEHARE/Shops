"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function InfiniteProductList({ products }) {
  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 10));
  const [hasMore, setHasMore] = useState(true);

  const loader = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      {
        rootMargin: "100px",
      }
    );

    if (loader.current) observer.observe(loader.current);

    return () => observer.disconnect();
  }, [visibleProducts, hasMore]);

  const loadMore = () => {
    const nextProducts = products.slice(
      visibleProducts.length,
      visibleProducts.length + 10
    );

    if (nextProducts.length === 0) {
      setHasMore(false);
      return;
    }

    setVisibleProducts((prev) => [...prev, ...nextProducts]);
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {visibleProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {/* Loader */}
      <div
        ref={loader}
        className="flex justify-center items-center py-10 text-gray-500"
      >
        {hasMore ? (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
        ) : (
          <p>No more products</p>
        )}
      </div>
    </>
  );
}
