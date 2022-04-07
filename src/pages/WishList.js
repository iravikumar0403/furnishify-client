import { Link } from "react-router-dom";
import { ProductCard } from "../components";
import { useProducts } from "../context/product-context";

export const WishList = () => {
  const { wishlist } = useProducts();

  if (wishlist.length === 0) {
    return (
      <div className="container empty align-center">
        <img
          src="https://elitejewelryhouse.com/assets/images/empty-wishlist.png"
          alt=""
        />
        <p className="fs-3">Your wishlist is empty</p>
        <Link to="/products" className="btn primary">
          Create a wish now
        </Link>
      </div>
    );
  }
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
