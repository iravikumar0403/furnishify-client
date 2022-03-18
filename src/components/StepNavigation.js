import React from "react";

export const StepNavigation = ({ steps, currentStep }) => {
  return (
    <div className="stepper-wrapper">
      {steps.map((step, index) => (
        <div
        key={step}
          className={`avatar avatar-xs stepper ${
            steps.indexOf(currentStep) >= index && "active"
          }`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};
