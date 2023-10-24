import { createBrowserRouter } from "react-router-dom";
import MainLaout from "./Main/MainLaout";
import Home from "./Home/Home";
import Login from "../Pageses/Login";
import SingUp from "../Pageses/SingUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLaout></MainLaout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/singup',
          element:<SingUp></SingUp>
        }
      ]
    },
  ]);

  export default router