


import { products } from "@/data/products";
import InfiniteProductList from "@/components/ProductPage/InfiniteProductList";
export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1>Products</h1>

      <InfiniteProductList products={products} />
    </div>
  );
}