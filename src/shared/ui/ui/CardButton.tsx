import { PropsWithChildren } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../shadcn/card";
import { LucideIcon } from "lucide-react";

interface CardButtonProps extends PropsWithChildren {
  title?: string;
  des?: string;
  footer?: string;
  icon?: LucideIcon;
  onClick?: () => void;
}

const CardButton = ({
  children,
  title,
  des,
  footer,
  icon: Icon,
  onClick,
}: CardButtonProps) => {
  return (
    <Card
      onClick={onClick}
      className=" flex flex-row gap-6 items-center px-6 py-4 max-w-80 cursor-pointer group hover:bg-[#415A77]  transition"
    >
      {children}
      {/* 야기 아이콘을 props로 받아서 처리 */}
      {Icon && <Icon size={35} className=" group-hover:text-white" />}
      <div>
        <CardHeader className=" w-[200px] group-hover:text-white p-0 font-bold">
          {title}
        </CardHeader>
        <CardDescription className=" font-semibold group-hover:text-white">
          {des}
        </CardDescription>
        <CardContent></CardContent>
        <CardFooter className=" text-muted-foreground p-0 mt-1 text-xs group-hover:underline group-hover:text-primary">
          {footer}
        </CardFooter>
      </div>
    </Card>
  );
};

export default CardButton;
