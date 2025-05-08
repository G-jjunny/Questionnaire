import RHFRadioGroup from "@/shared/ui/ui/RHFRadioGroup";
import { registerSchema } from "../model/type";
import { UseFormReturn } from "react-hook-form";

interface FirstStepProps {
  form: UseFormReturn<registerSchema>;
}

const FirstStep = ({ form }: FirstStepProps) => {
  return (
    <div className=" flex flex-col items-center gap-4 ">
      <h1 className=" text-center text-2xl sm:text-3xl">
        Check out before registration.
      </h1>
      <h1 className=" text-center text-xl font-bold sm:text-2xl text-[#415A77]">
        Has the patient received neoadjuvant treatment?
      </h1>
      <div className=" flex w-full bg-[#F7F7F7] justify-center rounded-md">
        <RHFRadioGroup
          form={form}
          name="isReceived"
          options={[
            {
              label: "Yes, he/she has received neoadjuvant therapy.",
              value: "Y",
            },
            {
              label: "No, he/she has not received neoadjuvant therapy.",
              value: "N",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default FirstStep;
