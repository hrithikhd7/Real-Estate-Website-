import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ViewProperties from "../pages/viewProperties/ViewProperties";
import PrivateRoute from "./PrivateRoute";
import ProUpdate from "../pages/proUpdate/ProUpdate";
import Offers from "../pages/offers/Offers";
import ErrorPage from "../pages/error/ErrorPage";
import Mortgage from "./../pages/mortgage/Mortgage";
import Agents from "../pages/agents/Agents";
import Favorites from "./../pages/favorites/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/realestate.json"),
      },
      {
        path: "/update",
        element: (
          <PrivateRoute>
            <ProUpdate></ProUpdate>
          </PrivateRoute>
        ),
      },
      {
        path: "/offers",
        element: (
          <PrivateRoute>
            <Offers></Offers>
          </PrivateRoute>
        ),
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
        path: "/mortgage",
        element: <Mortgage></Mortgage>,
      },
      {
        path: "/agents/:id",
        element: <Agents></Agents>,
        loader: () => fetch("/realestate.json"),
      },
      {
        path: "favorites",

        element: (
          <PrivateRoute>
            <Favorites></Favorites>
          </PrivateRoute>
        ),
        loader: () => fetch("/realestate.json"),
      },
      {
        path: "/property/:id",
        element: (
          <PrivateRoute>
            <ViewProperties></ViewProperties>,
          </PrivateRoute>
        ),
        loader: () => fetch("/realestate.json"),
      },
    ],
  },
]);

export default router;
