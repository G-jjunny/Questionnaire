import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
