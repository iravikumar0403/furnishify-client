import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/product-context";
import { findItemById } from "../utils";

export const ProductDetails = () => {
  const { loading, products } = useProducts();
  const [activeImage, setActiveImage] = useState("");
  const { id } = useParams();
  const product = findItemById(id, products);

  useEffect(() => {
    if (product) {
      setActiveImage(product.images[0]);
    }
  }, [product]);

  if (loading || !product) {
    console.log(loading, product);
    return "Loading...";
  }

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
              onMouseOver={() => setActiveImage(img)}
            />
          ))}
        </div>
        <div className="my-2">
          <button className="btn primary">Add to cart</button>
          <button className="btn primary outlined ml-2">
            Save to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
