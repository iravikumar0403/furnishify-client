import React from "react";
import { useProducts } from "../context/product-context";

export const CartSummary = () => {
  const { cart } = useProducts();

  const calcCartPrice = (cartItems) => {
    return cartItems.reduce(
      (price, product) => (price = price + product.price * product.quantity),
      0
    );
  };

  const calcTotalPrice = (cartPrice, discount, deliveryCharges) =>
    cartPrice - discount + deliveryCharges;

  return (
    <div className="cart-summary">
      <h3>Cart Summary</h3>
      <ul className="list no-bullets">
        <li>
          <div className="summary-price">
            <p>Cart Price</p>
            <p>₹ {calcCartPrice(cart)}</p>
          </div>
        </li>
        <li>
          <div className="summary-price">
            <p>Discount</p>
            <p>₹ 499</p>
          </div>
        </li>
        <li>
          <div className="summary-price">
            <p>Delivery Charges</p>
            <p>₹ 499</p>
          </div>
        </li>
        <li>
          <div className="summary-price">
            <p className="fs-2">Total</p>
            <p className="fs-2">
              ₹ {calcTotalPrice(calcCartPrice(cart), 499, 499)}
            </p>
          </div>
        </li>
      </ul>
      <div>
        <button className="btn primary checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
