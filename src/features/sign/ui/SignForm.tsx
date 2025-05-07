import { Form } from "@/shared/ui/shadcn/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import formSchema from "../model/schema";
import RHFInput from "@/shared/ui/ui/RHFInput";
import { Button } from "@/shared/ui/shadcn/button";
import { useMutation } from "@tanstack/react-query";
import { authQueries } from "../api/queries";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/contants/routes";
import { AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/shared/ui/shadcn/alert";

const SignForm = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
      userPassword: "",
    },
  });

  const { mutate, isPending } = useMutation({
    ...authQueries.login,
    onSuccess: () => {
      navigate(ROUTES.ROOT);
    },
    onError: (err) => {
      alert(err.message);
      return (
        <>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{err.message}</AlertDescription>
          </Alert>
        </>
      );
    },
  });

  const onSubmit = (value: z.infer<typeof formSchema>) => {
    console.log(value);
    const data = {
      accountId: value.userId,
      password: value.userPassword,
    };
    mutate(data);
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
          {isPending ? (
            <Button disabled>
              <Loader2 className=" animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit" className=" bg-[#415A77] font-bold">
              Log In
            </Button>
          )}
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
