import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/shadcn/card";
import { PropsWithChildren, ReactNode } from "react";

interface StepFormProps extends PropsWithChildren {
  title: string;
  description?: string;
  content?: ReactNode;
}

const StepForm = ({ title, description, children }: StepFormProps) => {
  return (
    <div className="flex flex-col gap-4 ">
      <CardHeader className="p-0">
        <CardTitle className="text-2xl sm:text-3xl mb-4 ">{title}</CardTitle>
        {description && (
          <CardDescription className="text-lg sm:text-xl text-[#415a77] ">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="px-0">{children}</CardContent>
      <div className=" w-full h-[3px] bg-muted-foreground rounded-md"></div>
    </div>
  );
};

export default StepForm;
