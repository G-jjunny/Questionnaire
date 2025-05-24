import RHFRadioGroup from "@/shared/ui/ui/RHFRadioGroup";
import { registerSchema } from "../model/type";
import { UseFormReturn } from "react-hook-form";
import StepForm from "./StepForm";

interface FirstStepProps {
  form: UseFormReturn<registerSchema>;
}

const FirstStep = ({ form }: FirstStepProps) => {
  return (
    <div className="flex flex-col gap-4">
      <StepForm
        title="Check out before registration."
        description="Has the patient received neoadjuvant treatment?"
      >
        <div className=" flex w-full bg-[#F7F7F7] justify-center rounded-md pr-2">
          <RHFRadioGroup
            form={form}
            name="isReceived"
            options={[
              {
                label: (
                  <p className="text-lg">
                    <span className="font-bold">Yes</span>, he/she has received
                    neoadjuvant therapy.
                  </p>
                ),
                value: "Y",
              },
              {
                label: (
                  <p className="text-lg">
                    <span className="font-bold">No</span>, he/she has not
                    received neoadjuvant therapy.
                  </p>
                ),
                value: "N",
              },
            ]}
          />
        </div>
      </StepForm>
    </div>
  );
};

export default FirstStep;
