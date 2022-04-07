import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/product-context";
import {
  calcCartPrice,
  calcDeliveryCharges,
  calcTotalPrice,
} from "../utils/cart";
import logo from "../assets/furnishify.png";
import { useAuth } from "../context/auth-context";

export const Payment = ({ setCurrentStep }) => {
  const { cart } = useProducts();
  const { user } = useAuth();
  const cartTotal = calcCartPrice(cart);
  const deliveryCharges = calcDeliveryCharges(cartTotal);
  const totalAmount = calcTotalPrice(cartTotal, deliveryCharges);
  const { dispatch } = useProducts();
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState("processing");

  const handleOrderSuccess = () => {
    dispatch({
      type: "ORDER_SUCCESSFUL",
    });
    navigate("/");
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) return;
    const options = {
      key: "rzp_test_E1IU1aGWTBweMA",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Furnishify Ecomm",
      description: "Thank you for shopping with us",
      image: logo,
      handler: handleOrderSuccess,
      prefill: {
        name: user.name,
        email: user.email,
        contact: "9988776654",
      },
      modal: {
        ondismiss: function () {
          setPaymentStatus("cancelled");
        },
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObj = new window.Razorpay(options);
    paymentObj.open();
    paymentObj.on("payment.failed", () => {
      setPaymentStatus("failed");
    });
  };

  useEffect(() => {
    displayRazorpay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
    });
  };

  return (
    <div className="container">
      <div className="card m-auto p-5 payment-card">
        {paymentStatus === "processing" && (
          <h3 className="text-center">Processing payment</h3>
        )}
        {paymentStatus === "cancelled" && (
          <Fragment>
            <h3 className="text-center">Payment was cancelled</h3>
            <p className="text-center">
              <button
                className="btn primary"
                onClick={() => {
                  displayRazorpay();
                  setPaymentStatus("processing");
                }}
              >
                Complete payment
              </button>
            </p>
          </Fragment>
        )}
        {paymentStatus === "failed" && (
          <Fragment>
            <h3 className="text-center">Payment failed</h3>
            <p className="text-center">
              <button
                className="btn primary"
                onClick={() => {
                  displayRazorpay();
                  setPaymentStatus("processing");
                }}
              >
                Complete payment
              </button>
            </p>
          </Fragment>
        )}
      </div>
      <div className="btn-group">
        <button
          className="btn primary my-3"
          onClick={() => setCurrentStep("summary")}
        >
          Back
        </button>
      </div>
    </div>
  );
};
