"use client";

import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";

export default function InfiniteProductList({ products }) {
  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 10));
  const loader = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });

    if (loader.current) observer.observe(loader.current);

    return () => observer.disconnect();
  }, [visibleProducts]);

  const loadMore = () => {
    const nextProducts = products.slice(
      visibleProducts.length,
      visibleProducts.length + 10
    );

    if (nextProducts.length > 0) {
      setVisibleProducts((prev) => [...prev, ...nextProducts]);
    }
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
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div ref={loader} style={{ height: "60px", textAlign: "center" }}>
        Loading more...
      </div>
    </>
  );
}