import { useState } from "react";
import { OrderSummary, SelectAddress, StepNavigation } from "../components";
import { Payment } from "../components/Payment";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Checkout = () => {
  useDocumentTitle("Checkout | Furnishify");
  const steps = ["address", "summary", "payment"];
  const [currentStep, setCurrentStep] = useState(steps[0]);
  return (
    <div className="container">
      <StepNavigation steps={steps} currentStep={currentStep} />
      {currentStep === "address" && (
        <SelectAddress setCurrentStep={setCurrentStep} />
      )}
      {currentStep === "summary" && (
        <OrderSummary setCurrentStep={setCurrentStep} />
      )}
      {currentStep === "payment" && <Payment setCurrentStep={setCurrentStep} />}
    </div>
  );
};
