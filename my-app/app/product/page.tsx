


import { products } from "@/data/products";
import InfiniteProductList from "@/components/ProductPage/InfiniteProductList";
export default function ProductsPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Products</h1>

      <InfiniteProductList products={products} />
    </div>
  );
}