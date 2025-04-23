import { z } from "zod";
import { FormControl, FormField, FormItem, FormLabel } from "../shadcn/form";
import { Input } from "../shadcn/input";
import formSchema from "@/features/sign/model/schema";
import { UseFormReturn } from "react-hook-form";

type FormSchema = z.infer<typeof formSchema>;

interface RHFInputProps {
  form: UseFormReturn<FormSchema>;
  name: keyof FormSchema;
  placeholder: string;
  label: string;
  type: string;
}

const RHFInput = ({ form, name, placeholder, label, type }: RHFInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className=" flex gap-2 items-center">
          <FormLabel className=" w-[100px] font-bold">{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default RHFInput;
