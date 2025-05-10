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

const StepForm = ({ title, description, content, children }: StepFormProps) => {
  return (
    <div className="flex flex-col  gap-4">
      <CardHeader className="p-0">
        <CardTitle className="text-2xl sm:text-3xl mb-4">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="px-0">{children}</CardContent>
    </div>
  );
};

export default StepForm;
