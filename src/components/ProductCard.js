import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useProducts } from "../context/product-context";
import { updateCart, updateWishlist } from "../services";
import { findItemById } from "../utils";

export const ProductCard = ({ product }) => {
  const { _id, images, title, price, rating } = product;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { cart, wishlist, dispatch } = useProducts();
  const { user } = useAuth();

  const addToWishlist = (product) => {
    if (user) {
      dispatch({
        type: "ADD_TO_WISHLIST",
        payload: product,
      });
      updateWishlist([...wishlist, product]);
    } else {
      navigate("/login", { state: { from: pathname }, replace: true });
    }
  };

  const removeFromWishlist = (product) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: product,
    });
    updateWishlist(wishlist.filter((item) => item._id !== product._id));
  };

  const addToCart = (product) => {
    if (user) {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
      updateCart([...cart, { ...product, quantity: 1 }]);
    } else {
      navigate("/login", { state: { from: pathname }, replace: true });
    }
  };

  return (
    <div className="card">
      <Link to={`/products/${_id}`}>
        <div className="card-media cursor-pointer">
          <img
            className="img-responsive img-rounded"
            src={images[0]}
            alt={title}
          />
        </div>
      </Link>
      <div className="card-body">
        <h3 className="card-title m-0">{title}</h3>
      </div>
      <div className="card-footer flex-between">
        <p className="fs-2 m-0">₹ {price}</p>
        <div className="text-warn fs-1">
          {findItemById(_id, wishlist) ? (
            <button
              className="btn icon-only primary"
              onClick={() => removeFromWishlist(product)}
            >
              <i className="fa-solid fa-heart"></i>
            </button>
          ) : (
            <button
              className="btn icon-only primary"
              onClick={() => addToWishlist(product)}
            >
              <i className="fa-regular fa-heart"></i>
            </button>
          )}
          <span>{rating}</span>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
      {findItemById(_id, cart) ? (
        <Link className="btn primary mx-2 mb-2 text-center" to="/cart">
          Go to cart
        </Link>
      ) : (
        <button
          className="btn primary mx-2 mb-2"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};
