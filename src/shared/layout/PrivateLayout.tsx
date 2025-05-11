import NavBar from "@/features/nav/NavBar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../contants/routes";

const PrivateLayout = () => {
  const user = localStorage.getItem("user"); // or whatever key you use
  const location = useLocation();

  if (!user) {
    // 인증되지 않은 경우 로그인 페이지로 리디렉션
    return <Navigate to={ROUTES.SIGN} state={{ from: location }} replace />;
  }
  return (
    <div className="w-[100vw] h-[100vh] relative flex flex-col justify-center items-center">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
