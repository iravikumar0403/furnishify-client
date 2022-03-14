import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useProducts } from "../context/product-context";
import { updateWishlist } from "../services";
import { updateCart } from "../services/cart";
import { findItemById } from "../utils";

export const ProductDetails = () => {
  const { loading, products, cart, wishlist, dispatch } = useProducts();
  const [activeImage, setActiveImage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    state: { user },
  } = useAuth();
  const product = findItemById(id, products);

  useEffect(() => {
    if (product) {
      setActiveImage(product.images[0]);
    }
  }, [product]);

  if (loading || !product) {
    return "Loading...";
  }

  const addToCart = (product) => {
    if (user) {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
      updateCart([...cart, { ...product, quantity: 1 }]);
    } else {
      navigate("/login");
    }
  };

  const changeThumbnail = () => {
    let timeout_id;
    return (e) => {
      if (timeout_id) {
        clearTimeout(timeout_id);
      }
      if (e.type === "mouseenter") {
        timeout_id = setTimeout(() => {
          setActiveImage(e.target.src);
        }, 300);
      }
    };
  };

  const handleMouseOver = changeThumbnail();

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
    <div className="grid grid-50-50 m-5 px-5">
      <div>
        <img className="img-responsive" src={activeImage} alt={product.title} />
      </div>
      <div>
        <h1>{product.title}</h1>
        <p className="text-secondary">By {product.seller}</p>
        <h2>₹ {product.price}</h2>
        <p>{product.description}</p>
        <div>
          {product.images.map((img, index) => (
            <img
              key={index}
              width="100px"
              className="mr-2"
              src={img}
              alt="preview"
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOver}
            />
          ))}
        </div>
        <div className="my-2">
          {findItemById(id, cart) ? (
            <button className="btn primary" onClick={() => navigate("/cart")}>
              Go to cart
            </button>
          ) : (
            <button className="btn primary" onClick={() => addToCart(product)}>
              Add to cart
            </button>
          )}
          {findItemById(id, wishlist) ? (
            <button
              className="btn primary outlined ml-2"
              onClick={() => removeFromWishlist(product)}
            >
              Remove from wishlist
            </button>
          ) : (
            <button
              className="btn primary outlined ml-2"
              onClick={() => addToWishlist(product)}
            >
              Save to wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
