import { Form } from "@/shared/ui/shadcn/form";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useStepForm from "../model/useStepForm";
import { Button } from "@/shared/ui/shadcn/button";
import ThirdStep from "./ThirdStep";
import { STEP, stepField, steps } from "../model/type";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/contants/routes";
import { useMutation } from "@tanstack/react-query";
import { registerQueries } from "../api/queries";
import { useUserStore } from "@/shared/store/useStore";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import Stepper from "./Stepper";
import { Card } from "@/shared/ui/shadcn/card";
import { registerSchema } from "../model/schema";
import { useState } from "react";

const RegisterForm = () => {
  const [isSubmited, setIsSubmited] = useState<boolean>(false);
  const navigate = useNavigate();
  const institute = useUserStore((state) => state.user);
  const { mutate, isPending } = useMutation({
    mutationFn: registerQueries.register.mutationFn,
    onSuccess: (res) => {
      setIsSubmited(true);
      toast(res.message);
    },
  });

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
    const data = {
      isReceived: value.isReceived,
      patientId: value.patientId,
      patientName: value.patientName,
      isMale: value.isMale,
      institution: institute?.institution,
      birthday: value.birthday,
      operationDate: value.operationDate,
      group: value.group,
      serialNum: value.serialNum,
    };
    // console.log(data);
    // setIsSubmited(true);
    mutate(data);
  };

  return (
    <div className="flex flex-col gap-4 w-full items-center">
      {/* todos : 단계별 stepper UI */}
      <Stepper currentStep={currentStep} steps={steps} />
      <Card className="p-4 max-w-2xl w-full ">
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
            {currentStep === STEP.THIRD && (
              <ThirdStep form={form} isSubmited={isSubmited} />
            )}

            <div
              className={`flex ${
                isSubmited ? "justify-end" : "justify-between"
              } `}
            >
              {/* 이전 버튼 */}
              {isFirst ? (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => navigate(ROUTES.ROOT)}
                >
                  Back
                </Button>
              ) : isSubmited ? (
                <></>
              ) : (
                <Button type="button" variant="outline" onClick={back}>
                  {isLast ? "Edit" : "Back"}
                </Button>
              )}
              {/* 마지막 단계가 아닐때 Next */}
              {!isLast && (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-[#415a77] hover:bg-[#778da9]"
                >
                  Next
                </Button>
              )}
              {/* 마지막 단계일때 Submit */}
              {isLast &&
                (isPending ? (
                  <Button disabled>
                    <Loader2 className=" animate-spin" />
                    Please wait
                  </Button>
                ) : isSubmited ? (
                  <Button
                    type="button"
                    className=" bg-[#415a77] hover:bg-[#778da9]"
                    onClick={() => {
                      navigate(ROUTES.ROOT);
                    }}
                  >
                    Check Out
                  </Button>
                ) : (
                  <Button
                    className=" bg-[#415a77] hover:bg-[#778da9]"
                    type="submit"
                  >
                    Submit
                  </Button>
                ))}
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterForm;
