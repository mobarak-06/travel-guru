import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Destination from "../components/Destination";
import Login from "../components/Login";
import Register from "../components/Register";
import Booking from "../components/Booking";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/destination",
        element: <Destination/>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/booking",
        element: <PrivateRoute>
          <Booking></Booking>
        </PrivateRoute>,
        loader : () => fetch('/hotel.json')
      },
    ],
  },
]);

export default router;
