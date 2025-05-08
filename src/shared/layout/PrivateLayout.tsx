import NavBar from "@/features/nav/NavBar";
import { Outlet } from "react-router-dom";
import { Toaster } from "../ui/shadcn/sonner";

const PrivateLayout = () => {
  return (
    <div className="w-[100vw] h-[100vh] relative flex flex-col justify-center items-center">
      <NavBar />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default PrivateLayout;
