import { useProducts } from "../context/product-context";
import { ProductCard } from ".";
import { useFilter } from "../context/filter-context";
import {
  filterByCategory,
  filterByPrice,
  filterByRating,
  getSortedProducts,
  searchProducts,
} from "../utils";

export const Products = () => {
  const { loading, products } = useProducts();
  const { filters } = useFilter();

  const searchResults = searchProducts(products, filters.searchQuery);
  const categorizedProducts = filterByCategory(searchResults, filters.category);
  const filteredByRating = filterByRating(categorizedProducts, filters.rating);
  const filteredProducts = filterByPrice(filteredByRating, filters.price);
  const sortedProducts = getSortedProducts(filteredProducts, filters.sortBy);

  return (
    <section className="card-grid justify-center py-5">
      {loading && "Loading..."}
      {sortedProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
};
