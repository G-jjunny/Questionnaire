import { useState } from "react";

const useStepForm = <T extends string>(steps: T[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const back = () => {
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const reset = () => setCurrentStepIndex(0);

  const currentStep = steps[currentStepIndex];

  return {
    currentStep,
    isFirst: currentStepIndex === 0,
    isLast: currentStepIndex === steps.length - 1,
    next,
    back,
    reset,
  };
};

export default useStepForm;
