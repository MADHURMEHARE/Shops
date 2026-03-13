"use client";

export default function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "12px",
        background: "#fff"
      }}
    >
      <img
  src={product.image}
  alt={product.name}
  style={{
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px"
  }}
/>

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button
        style={{
          padding: "8px 12px",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "6px"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}