import { ROUTES } from "@/shared/contants/routes";
import CardButton from "@/shared/ui/ui/CardButton";
import { FileSignature, ListCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col gap-5">
      <h3 className=" text-2xl font-bold text-center">Please select a menu</h3>
      <div className=" flex gap-5 md:flex-row flex-col">
        <CardButton
          title="Register New Participant"
          des="Register new patient data and assign a groups"
          footer="Click to Register Page"
          icon={FileSignature}
          onClick={() => navigate(ROUTES.REGISTER)}
        />
        <CardButton
          title="Enrollment List"
          des="Register new patient data and assign a groups"
          footer="Click to Enrollment List Page"
          icon={ListCheck}
          onClick={() => navigate(ROUTES.LIST.BASE)}
        />
      </div>
    </div>
  );
};

export default HomePage;
