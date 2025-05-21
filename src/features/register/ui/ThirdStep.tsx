import { UseFormReturn } from "react-hook-form";
import { registerSchema } from "../model/type";
import StepForm from "./StepForm";
import { useQuery } from "@tanstack/react-query";
import { registerQueries } from "../api/queries";
import { useEffect } from "react";

interface ThirdStepProps {
  form: UseFormReturn<registerSchema>;
  isSubmited: boolean;
}

const ThirdStep = ({ form, isSubmited }: ThirdStepProps) => {
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
          <InfoItem label="Neoadjuvant treatment" value={values.isReceived} />
          <InfoItem label="Birthday" value={values.birthday} />
          <InfoItem label="Operation Date" value={values.operationDate} />
          {isSubmited && (
            <div className="flex flex-row text-lg font-bold ">
              <div className=" w-full text-center p-2 bg-[#1b263b] rounded-bl-md rounded-tl-md text-white">
                Group
              </div>
              <div className=" w-full text-center p-2 rounded-br-md rounded-tr-md bg-[#778da9] text-white">
                {isLoading ? "Assigning..." : data?.group}
              </div>
            </div>
          )}
        </div>
        {isSubmited ? (
          <div className="text-sm text-center text-muted-foreground mt-2">
            Please check the group assigned to the patient and then click the
            button below.
          </div>
        ) : (
          <div className=" flex justify-between mt-2 items-end">
            <p className="text-sm text-center text-muted-foreground">
              If you need to edit the data, click "Edit".
            </p>
            <p className=" text-center ">
              After entering the data, click “Submit”.
            </p>
          </div>
        )}
      </StepForm>
    </div>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-center text-sm border border-accent-foreground p-2">
    <span className="font-semibold">{label}</span>
    <span className=" font-bold">{value}</span>
  </div>
);

export default ThirdStep;
