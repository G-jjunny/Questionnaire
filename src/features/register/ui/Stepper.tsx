import { cn } from "@/shared/lib/utils";
import { Check } from "lucide-react";

type StepperProps<T extends string> = {
  steps: T[];
  currentStep: T;
};

const Stepper = <T extends string>({ steps, currentStep }: StepperProps<T>) => {
  const currentIndex = steps.indexOf(currentStep);

  return (
    <div className="flex items-center justify-center  px-2">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isActive = index === currentIndex;

        return (
          <div key={step} className="flex items-center">
            <div
              className={cn(
                "w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-medium",
                isCompleted
                  ? "bg-[#415a77]"
                  : isActive
                  ? "bg-[#778da9]"
                  : "bg-gray-300"
              )}
            >
              {isCompleted ? <Check size={16} /> : index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className="min-w-10 h-1 bg-gray-300 mx-2 relative">
                <div
                  className={cn(
                    "absolute h-1 top-0 left-0 bg-[#778da9] transition-all duration-300",
                    isCompleted ? "w-full" : "w-0"
                  )}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
