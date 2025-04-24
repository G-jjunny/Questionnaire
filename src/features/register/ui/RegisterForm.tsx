// import { Form } from "@/shared/ui/shadcn/form";
// import FirstStep from "./FirstStep";
// import Stepper from "./Stepper";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import registerSchema from "../model/schema";
// import SecondStep from "./SecondStep";

// const RegisterForm = () => {
//   const form = useForm<z.infer<typeof registerSchema>>({
//     resolver: zodResolver(registerSchema),
//   });

//   const onSubmit = (value: z.infer<typeof registerSchema>) => {
//     console.log(value);
//   };

//   return (
//     <div>
//       <Stepper />
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)}>
//           <FirstStep form={form} />
//           <SecondStep form={form} />
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default RegisterForm;

import { Form } from "@/shared/ui/shadcn/form";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import Stepper from "./Stepper";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import registerSchema from "../model/schema";
import useStepForm from "../model/useStepForm";
import { Button } from "@/shared/ui/shadcn/button";

const steps = ["first", "second"] as ("first" | "second")[];

const RegisterForm = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });

  const stepField: Record<
    (typeof steps)[number],
    (keyof z.infer<typeof registerSchema>)[]
  > = {
    first: ["isReceived"],
    second: ["patientId", "patientName", "isMale", "birthday", "operationDate"],
  };

  const { currentStep, next, back, isFirst, isLast } =
    useStepForm<(typeof steps)[number]>(steps);

  const handleNext = async () => {
    const valid = await form.trigger(stepField[currentStep]);

    if (valid) {
      next();
    }
  };

  const onSubmit = (value: z.infer<typeof registerSchema>) => {
    console.log(value);
  };

  return (
    <div className="space-y-4">
      {/* <Stepper currentStep={currentStep} steps={steps} /> */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => {
            if (!isLast) {
              console.log(data);
              next();
            } else {
              onSubmit(data);
            }
          })}
          className="space-y-4"
        >
          {currentStep === "first" && <FirstStep form={form} />}
          {currentStep === "second" && <SecondStep form={form} />}

          <div className="flex justify-between pt-4">
            {!isFirst && (
              <Button type="button" onClick={back}>
                Back
              </Button>
            )}
            {!isLast && (
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            )}
            {isLast && <Button type="submit">Submit</Button>}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
