import { Outlet } from "react-router-dom";
import { Toaster } from "../ui/shadcn/sonner";

const Layout = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Layout;
