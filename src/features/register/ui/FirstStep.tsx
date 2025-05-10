import RHFRadioGroup from "@/shared/ui/ui/RHFRadioGroup";
import { registerSchema } from "../model/type";
import { UseFormReturn } from "react-hook-form";
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/shadcn/card";

interface FirstStepProps {
  form: UseFormReturn<registerSchema>;
}

const FirstStep = ({ form }: FirstStepProps) => {
  return (
    <div className="flex flex-col gap-4">
      <CardHeader className="p-0">
        <CardTitle className="text-2xl sm:text-3xl">
          Check out before registration.
        </CardTitle>
        <CardDescription className="text-xl font-bold sm:text-2xl text-[#415A77]">
          Has the patient received neoadjuvant treatment?
        </CardDescription>
      </CardHeader>
      <h1 className=""></h1>
      <div className=" flex w-full bg-[#F7F7F7] justify-center rounded-md">
        <RHFRadioGroup
          form={form}
          name="isReceived"
          options={[
            {
              label: (
                <p className="text-lg">
                  <span className="font-bold">Yes</span> he/she has received
                  neoadjuvant therapy.
                </p>
              ),
              value: "Y",
            },
            {
              label: (
                <p className="text-lg">
                  <span className="font-bold">No</span> No, he/she has not
                  received neoadjuvant therapy.
                </p>
              ),
              value: "N",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default FirstStep;
