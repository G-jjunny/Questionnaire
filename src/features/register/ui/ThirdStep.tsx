import { UseFormReturn } from "react-hook-form";
import { registerSchema } from "../model/type";

interface ThirdStepProps {
  form: UseFormReturn<registerSchema>;
}

const ThirdStep = ({ form }: ThirdStepProps) => {
  const values = form.getValues();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">
        Confirm Your Information
      </h2>

      <div className="space-y-2 bg-gray-50 p-4 rounded-md shadow">
        <InfoItem
          label="Is Received"
          value={values.isReceived ? "Yes" : "No"}
        />
        <InfoItem label="Patient ID" value={values.patientId} />
        <InfoItem label="Patient Name" value={values.patientName} />
        <InfoItem label="Sex" value={values.isMale ? "Male" : "Female"} />
        <InfoItem label="Birthday" value={values.birthday} />
        <InfoItem label="Operation Date" value={values.operationDate} />
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-sm">
    <span className="font-semibold">{label}</span>
    <span>{value}</span>
  </div>
);

export default ThirdStep;
