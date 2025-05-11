import { UseFormReturn } from "react-hook-form";
import { registerSchema } from "../model/type";
import StepForm from "./StepForm";

interface ThirdStepProps {
  form: UseFormReturn<registerSchema>;
}

const ThirdStep = ({ form }: ThirdStepProps) => {
  const values = form.getValues();

  return (
    <div className=" flex flex-col gap-2">
      <StepForm title="Please confirm the data.">
        <div className="space-y-2 bg-gray-50 flex flex-col gap-2 p-4 rounded-md shadow">
          <InfoItem label="Patient ID" value={values.patientId} />
          <InfoItem label="Patient Name" value={values.patientName} />
          <InfoItem label="Sex" value={values.isMale ? "Male" : "Female"} />
          <InfoItem label="Is Received" value={values.isReceived} />
          <InfoItem label="Birthday" value={values.birthday} />
          <InfoItem label="Operation Date" value={values.operationDate} />
        </div>
        <p className=" text-center">After entering the data, click “Next”.</p>
        <p className="text-sm text-center text-muted-foreground">
          If you need to edit the data, click "Edit".
        </p>
      </StepForm>
    </div>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-center text-sm border border-accent-foreground p-2">
    <span className="font-semibold">{label}</span>
    <span className=" font-semibold">{value}</span>
  </div>
);

export default ThirdStep;
