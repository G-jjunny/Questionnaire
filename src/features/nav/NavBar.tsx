import { ROUTES } from "@/shared/contants/routes";
import { useUserStore } from "@/shared/store/useStore";
import { Button } from "@/shared/ui/shadcn/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/shadcn/tooltip";
import { HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate(ROUTES.SIGN);
  };

  return (
    <div className=" fixed top-0 left-0 w-full flex justify-end p-2">
      <div className=" flex gap-2">
        <Button
          className=" cursor-pointer bg-[#415a77] hover:underline"
          onClick={() => navigate(ROUTES.ROOT)}
        >
          <HomeIcon size={25} color="#fff" />
        </Button>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                className="bg-[#415a77] hover:underline"
                onClick={handleLogout}
              >
                Log Out
              </Button>
              <TooltipContent>
                <p>{user?.accountId}</p>
              </TooltipContent>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default NavBar;
