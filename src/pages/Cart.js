import { Link } from "react-router-dom";
import { CartList, CartSummary } from "../components";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useProducts } from "../context/product-context";

export const Cart = () => {
  useDocumentTitle("Cart | Furnishify");
  const { cart } = useProducts();
  if (cart.length === 0) {
    return (
      <div className="container empty align-center">
        <img
          src="https://elitejewelryhouse.com/assets/images/empty-wishlist.png"
          alt=""
        />
        <p className="fs-3">Your cart is empty</p>
        <Link to="/products" className="btn primary">
          Explore products
        </Link>
      </div>
    );
  }
  return (
    <main className="cart">
      <CartList />
      <CartSummary />
    </main>
  );
};
