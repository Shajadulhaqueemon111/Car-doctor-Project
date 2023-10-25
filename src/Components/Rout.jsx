import { createBrowserRouter } from "react-router-dom";
import MainLaout from "./Main/MainLaout";
import Home from "./Home/Home";
import Login from "../Pageses/Login";
import SingUp from "../Pageses/SingUp";
import CheckOut from "./CheckOut/CheckOut";
import Bookings from "../Pageses/Bookings";
import PrivateRoute from "./Private/PrivateRoute";

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
        },
        {
          path:'/booking',
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
          path:'/checkout/:id',
          element:<CheckOut></CheckOut>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router