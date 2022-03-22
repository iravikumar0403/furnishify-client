import { ProductCard } from "../components";
import { useProducts } from "../context/product-context";

export const WishList = () => {
  const { wishlist } = useProducts();

  return (
    <div>
      <h2 className="text-center">Your Wishlist</h2>
      <div className="card-grid justify-center my-3">
        {wishlist.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
