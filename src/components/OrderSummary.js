import { Fragment } from "react";
import { useProducts } from "../context/product-context";
import { calcCartPrice, calcDeliveryCharges, calcTotalPrice } from "../utils";

export const OrderSummary = ({ setCurrentStep }) => {
  const { cart } = useProducts();
  const cartTotal = calcCartPrice(cart);
  const deliveryCharges = calcDeliveryCharges(cartTotal);
  return (
    <Fragment>
      <h2 className="text-center">Order Summary</h2>
      <table>
        <tr>
          <th colSpan={2}>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        {cart.map((product) => (
          <tr>
            <td colSpan={2}>{product.title}</td>
            <td className="text-center">₹ {product.price}</td>
            <td className="text-center">{product.quantity}</td>
            <td className="text-center">{product.price * product.quantity}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={2}>Grand Total</td>
          <td colSpan={3} className="text-right">
            ₹ {cartTotal}
          </td>
        </tr>
        <tr>
          <td colSpan={2}>Delivery Charges</td>
          <td colSpan={3} className="text-right">
            ₹ {deliveryCharges}
          </td>
        </tr>
        <tr className="fs-1">
          <td colSpan={2}>Grand Total</td>
          <td colSpan={3} className="text-right">
            ₹ {calcTotalPrice(cartTotal, deliveryCharges)}
          </td>
        </tr>
      </table>
      <div className="btn-group">
        <button
          className="btn primary mr-auto my-3"
          onClick={() => setCurrentStep("address")}
        >
          Back
        </button>
        <button
          className="btn primary ml-auto  my-3"
          onClick={() => setCurrentStep("payment")}
        >
          Proceed to pay
        </button>
      </div>
    </Fragment>
  );
};
