import React from "react";
import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import RoomsDetails from "../Components/Rooms/RoomsDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Statistics from "../Pages/Dashboard/Common/Statistics";
import AddRoom from "../Pages/Dashboard/Host/AddRoom";
import MyListings from "../Pages/Dashboard/Host/MyListings";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser";
import Profile from "../Pages/Dashboard/Common/Profile";
import AdminMenu from "../Components/DashboardMenu/AdminMenu";
import AdminRoute from "./AdminRoute";
import HostRoute from "./HostRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms/:id",
        element: (
          <PrivateRoute>
            <RoomsDetails></RoomsDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },

  // Dashboard

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics></Statistics>
          </PrivateRoute>
        ),
      },
      {
        path: "addRoom",
        element: (
          <PrivateRoute>
            <AddRoom></AddRoom>
          </PrivateRoute>
        ),
      },
      {
        path: "myListings",
        element: (
          <PrivateRoute>
            <HostRoute><MyListings></MyListings></HostRoute>
          </PrivateRoute>
        ),
      },

      {
        path: "manageUser",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUser></ManageUser>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
