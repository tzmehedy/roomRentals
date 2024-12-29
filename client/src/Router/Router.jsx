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
    element: <Dashboard></Dashboard>,
    children:[
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "addRoom",
        element: <AddRoom></AddRoom>
      },
      {
        path: "myListings",
        element: <MyListings></MyListings>
      }
    ]

  }
]);

export default router;
