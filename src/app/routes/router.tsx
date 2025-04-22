import Admin from "@/pages/admin";
import HomePage from "@/pages/home";
import EnrollmentList from "@/pages/List";
import Register from "@/pages/register";
import SignIn from "@/pages/signIn/Index";
import { ROUTES } from "@/shared/contants/routes";
import Layout from "@/shared/layout/Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  // private route
  {
    path: ROUTES.ROOT, // home 페이지 라우터
    element: <HomePage />,
  },
  {
    path: ROUTES.REGISTER, // 신규 환자군 등록 라우터
    element: <Register />,
  },
  {
    path: ROUTES.LIST, // 기존 환자군 리스트 라우터
    element: <EnrollmentList />,
  },
  {
    path: ROUTES.ADMIN, // 기존 환자군 리스트 라우터
    element: <Admin />,
  },

  //  public route
  {
    element: <Layout />, // sign layout
    children: [
      {
        path: ROUTES.SIGN, // 로그인 라우터
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
