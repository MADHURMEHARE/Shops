

import InfiniteProductList from "@/components/InfiniteProductList";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Products</h1>

      <InfiniteProductList products={products} />
    </div>
  );
}