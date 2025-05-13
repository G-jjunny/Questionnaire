import { ROUTES } from "@/shared/contants/routes";
import { Button } from "@/shared/ui/shadcn/button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col gap-5">
      <h3 className=" text-2xl font-bold">Please select a menu</h3>
      <div className=" flex gap-5">
        <Button
          variant="link"
          className=" h-[100px] bg-[#415A77] font-bold text-md text-white cursor-pointer"
          onClick={() => navigate(ROUTES.REGISTER)}
        >
          Register
          <br />
          New
          <br />
          Participant
        </Button>
        <Button
          variant="link"
          className="h-[100px] bg-[#415A77] font-bold text-md text-white cursor-pointer"
          onClick={() => navigate(ROUTES.LIST.BASE)}
        >
          Enrollment
          <br />
          List
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
