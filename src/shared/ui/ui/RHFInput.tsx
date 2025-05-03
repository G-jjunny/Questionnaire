import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../shadcn/form";
import { Input } from "../shadcn/input";
import { UseFormReturn, FieldValues, Path } from "react-hook-form";

interface RHFInputProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  placeholder: string;
  label: string;
  type: string;
  className?: string;
}

const RHFInput = <T extends FieldValues>({
  form,
  name,
  placeholder,
  label,
  type,
  className = "",
}: RHFInputProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-0">
          <div className="flex gap-2 items-center">
            <FormLabel className="w-[100px] font-bold">{label}</FormLabel>
            <FormControl>
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                className={className}
              />
            </FormControl>
          </div>
          <FormMessage className=" text-end" />
        </FormItem>
      )}
    />
  );
};

export default RHFInput;
