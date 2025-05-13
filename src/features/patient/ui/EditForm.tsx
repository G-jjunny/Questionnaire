import { editSchema } from "@/features/register/model/schema";
import RHFInput from "@/shared/ui/ui/RHFInput";
import RHFRadioGroup from "@/shared/ui/ui/RHFRadioGroup";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface EditFormProps {
  form: UseFormReturn<z.infer<typeof editSchema>>;
}

const EditForm = ({ form }: EditFormProps) => {
  return (
    <>
      <div className="flex flex-col gap-6 mb-4">
        <RHFInput
          form={form}
          label="Patient ID"
          name="patientId"
          placeholder="Patient Id"
          type="text"
        />
        <RHFInput
          form={form}
          label="Patient Name"
          name="patientName"
          placeholder="patient Name"
          type="text"
        />
        <RHFRadioGroup
          form={form}
          name="isMale"
          label="Sex"
          flex
          options={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
          ]}
        />
        <RHFInput
          form={form}
          type="date"
          name="birthday"
          label="Birthday"
          placeholder=""
          className="flex justify-between"
        />
        <RHFInput
          form={form}
          type="date"
          name="operationDate"
          label="Operation Date"
          placeholder=""
          className="flex justify-between"
        />
      </div>
      <h2 className="text-md text-center text-[#415A77]">
        After entering the data, click “Next”.
      </h2>
    </>
  );
};

export default EditForm;
