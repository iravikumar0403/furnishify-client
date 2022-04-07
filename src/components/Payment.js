import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/product-context";

export const Payment = ({ setCurrentStep }) => {
  const { dispatch } = useProducts();
  const navigate = useNavigate();
  const completeOrder = () => {
    dispatch({
      type: "RESET",
    });
    navigate("/");
  };
  return (
    <div className="container">
      <div className="card m-auto p-5 payment-card">
        <h3 className="text-center">
          This feature is under development. Coming Soon
        </h3>
      </div>
      <div className="btn-group">
        <button
          className="btn primary my-3"
          onClick={() => setCurrentStep("summary")}
        >
          Back
        </button>
        <button className="btn primary ml-auto my-3" onClick={completeOrder}>
          Place order
        </button>
      </div>
    </div>
  );
};
