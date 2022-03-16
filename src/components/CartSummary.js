import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/product-context";
import { calcCartPrice, calcDeliveryCharges, calcTotalPrice } from "../utils";

export const CartSummary = () => {
  const { cart } = useProducts();
  const cartTotal = calcCartPrice(cart);
  const deliveryCharges = calcDeliveryCharges(cartTotal);

  return (
    <div className="cart-summary">
      <h3>Cart Summary</h3>
      <ul className="list no-bullets">
        <li>
          <div className="summary-price">
            <p>Cart Price</p>
            <p>₹ {cartTotal}</p>
          </div>
        </li>
        <li>
          <div className="summary-price">
            <p>Delivery Charges</p>
            <p>₹ {deliveryCharges}</p>
          </div>
        </li>
        <li>
          <div className="summary-price">
            <p className="fs-2">Total</p>
            <p className="fs-2">
              ₹ {calcTotalPrice(cartTotal, deliveryCharges)}
            </p>
          </div>
        </li>
      </ul>
      <div>
        <Link to="/checkout">
          <button className="btn primary checkout-btn" disabled={!cart.length}>
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};
