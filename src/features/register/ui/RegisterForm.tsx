import { Form } from "@/shared/ui/shadcn/form";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import registerSchema from "../model/schema";
import useStepForm from "../model/useStepForm";
import { Button } from "@/shared/ui/shadcn/button";
import ThirdStep from "./ThirdStep";
import { STEP, stepField, steps } from "../model/type";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/contants/routes";

const RegisterForm = () => {
  const navigate = useNavigate();

  // 작성한 zod schema object로부터 타입 추론
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });

  const { currentStep, next, back, isFirst, isLast } =
    useStepForm<(typeof steps)[number]>(steps);

  const handleNext = async () => {
    const valid = await form.trigger(stepField[currentStep]);
    if (valid) {
      // 해당 feild에 대한 비동기 유효성 검사
      next();
    }
  };

  const onSubmit = (value: z.infer<typeof registerSchema>) => {
    /** todos :
     * submit 비즈니스 로직 추가
     */
    console.log(value);
  };

  return (
    <div className="space-y-4">
      {/* todos : 단계별 stepper UI */}
      {/* <Stepper currentStep={currentStep} steps={steps} />  */}
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
          {/* 단계별 form 스텝 */}
          {currentStep === STEP.FIRST && <FirstStep form={form} />}
          {currentStep === STEP.SECOND && <SecondStep form={form} />}
          {currentStep === STEP.THIRD && <ThirdStep form={form} />}

          <div className="flex justify-between pt-4">
            {isFirst ? (
              <Button type="button" onClick={() => navigate(ROUTES.ROOT)}>
                Back
              </Button>
            ) : (
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
