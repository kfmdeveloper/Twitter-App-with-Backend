import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Home";
import LoginPage from "./LoginPage.jsx";
import Feed from "./Feed";
import Profile from "./Profile";
import Following from "./Following";
import CreateTweett from "./CreateTweett";
import SignUp from "./SignUp";

const Body = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Feed />,
          children: [
            {
              path: "/",
              element: <CreateTweett />,
            },
            {
              path: "/following",
              element: <Following />,
            },
          ],
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },

    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  );
};

export default Body;
