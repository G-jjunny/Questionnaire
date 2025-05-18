import { UseFormReturn } from "react-hook-form";
import { registerSchema } from "../model/type";
import StepForm from "./StepForm";
import { useQuery } from "@tanstack/react-query";
import { registerQueries } from "../api/queries";
import { useEffect } from "react";

interface ThirdStepProps {
  form: UseFormReturn<registerSchema>;
}

const ThirdStep = ({ form }: ThirdStepProps) => {
  const values = form.getValues();
  const { data, isLoading } = useQuery(
    registerQueries.getGroup(values.isReceived)
  );

  // group 값이 로드되면 form에 설정
  useEffect(() => {
    if (data?.group) {
      console.log(data);
      form.setValue("group", data.group);
      form.setValue("serialNum", data.serial);
    }
  }, [data, form]);

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
        <div className="flex flex-row text-lg font-bold ">
          <div className=" w-full">Group</div>
          <div className=" w-full">
            {isLoading ? "Assigning..." : data?.group}
          </div>
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
