import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useProducts } from "../context/product-context";
import { updateWishlist } from "../services";
import { findItemById } from "../utils";

export const ProductCard = ({ product }) => {
  const { _id, images, title, seller, price, rating } = product;
  const navigate = useNavigate();
  const { wishlist, dispatch } = useProducts();
  const { user } = useAuth();

  const addToWishlist = (product) => {
    if (user) {
      dispatch({
        type: "ADD_TO_WISHLIST",
        payload: product,
      });
      updateWishlist([...wishlist, product]);
    } else {
      navigate("/login");
    }
  };

  const removeFromWishlist = (product) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: product,
    });
    updateWishlist(wishlist.filter((item) => item._id !== product._id));
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
        <h3 className="card-title">{title}</h3>
        <small>By {seller}</small>
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
    </div>
  );
};
