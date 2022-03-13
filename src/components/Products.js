import { useProducts } from "../context/product-context";
import { ProductCard } from ".";

export const Products = () => {
  const { loading, products } = useProducts();

  return (
    <section className="card-grid justify-center py-5">
      {loading && "Loading..."}
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
};
