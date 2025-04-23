import { Form } from "@/shared/ui/shadcn/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import formSchema from "../model/schema";
import RHFInput from "@/shared/ui/ui/RHFInput";
import { Button } from "@/shared/ui/shadcn/button";

const SignForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
      userPassword: "",
    },
  });

  const onSubmit = (value: z.infer<typeof formSchema>) => {
    console.log(value);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col gap-3"
        >
          <h1 className=" text-center font-bold text-3xl mb-5 sm:text-5xl">
            Multicenter study
            <br />
            Enrollment system
          </h1>
          <RHFInput
            form={form}
            name="userId"
            placeholder="ID"
            label="ID"
            type="text"
          />
          <RHFInput
            form={form}
            name="userPassword"
            placeholder="Password"
            label="Password"
            type="password"
          />
          <Button type="submit" className=" bg-[#415A77] font-bold">
            Log In
          </Button>
          <p className=" text-center text-sm mt-5 font-medium text-[#778DA9]">
            This system is only accessible to the trial staff.
            <br />
            Administrator: hj2415@hanmai.net
          </p>
        </form>
      </Form>
    </div>
  );
};

export default SignForm;
