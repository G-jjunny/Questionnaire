import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../shadcn/form";
import { UseFormReturn, FieldValues, Path } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../shadcn/radio-group";
import { ReactNode } from "react";

interface RHFRadioGroupProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string | null | ReactNode;
  flex?: boolean;
  options: {
    label: string | ReactNode;
    value: string;
  }[];
}

const RHFRadioGroup = <T extends FieldValues>({
  form,
  name,
  label,
  options,
  flex = false,
}: RHFRadioGroupProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`flex items-center`}>
          <FormLabel className={`font-bold ${flex ? "w-[100px]" : ""}`}>
            {label}
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
              className={`flex ${
                flex ? "justify-center w-full" : "flex-col justify-center"
              }  bg-[#F7F7F7] rounded-md py-2 `}
            >
              {options.map((option) => (
                <FormItem key={option.value} className="flex items-center">
                  <FormControl>
                    <RadioGroupItem value={option.value} />
                  </FormControl>
                  <FormLabel className="font-normal">{option.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFRadioGroup;
