import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useProducts } from "../context/product-context";
import { updateCart } from "../services/cart";
import { findItemById } from "../utils";

export const ProductDetails = () => {
  const { loading, products, cart, dispatch } = useProducts();
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

  const changeThumbnailDebounced = () => {
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

  const handleMouseOver = changeThumbnailDebounced();

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
        <div style={{ display: "flex" }}>
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
          <button className="btn primary outlined ml-2">
            Save to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
