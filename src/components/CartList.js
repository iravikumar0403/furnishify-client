import React from "react";
import { useProducts } from "../context/product-context";
import { updateWishlist } from "../services";
import { updateCart } from "../services/cart";

export const CartList = () => {
  const { cart, wishlist, dispatch } = useProducts();

  const incrementProductCount = (product) => {
    dispatch({
      type: "INCREMENT_PRODUCT_COUNT",
      payload: product,
    });
    updateCart(
      cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementProductCount = (product) => {
    dispatch({
      type: "DECREMENT_PRODUCT_COUNT",
      payload: product,
    });
    updateCart(
      cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
    updateCart(cart.filter((item) => item._id !== product._id));
  };

  const moveToWishlist = (product) => {
    dispatch({
      type: "MOVE_TO_WISHLIST",
      payload: product,
    });
    updateCart(cart.filter((item) => item._id !== product._id));
    updateWishlist([...wishlist, product]);
  };

  return (
    <div className="cart-list">
      {cart.map((product) => (
        <div key={product._id} className="card card-horizontal my-1 mx-2">
          <div className="card-media">
            <img
              className="img-responsive img-rounded"
              src={product.images[0]}
              alt={product.title}
            />
          </div>
          <div>
            <div className="card-body">
              <h3 className="card-title">{product.title}</h3>
              <p className="card-text">₹ {product.price}</p>
              <div>
                <button
                  disabled={product.quantity === 1}
                  className="btn primary icon-only"
                  onClick={() => decrementProductCount(product)}
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span className="fs-1">{product.quantity}</span>
                <button
                  className="btn primary icon-only"
                  onClick={() => incrementProductCount(product)}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn danger outlined"
                onClick={() => removeFromCart(product)}
              >
                Remove from cart
              </button>
              <button
                className="btn primary ml-1"
                onClick={() => moveToWishlist(product)}
              >
                Move to wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
