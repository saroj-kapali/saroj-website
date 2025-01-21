import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./shared_component/RootLayout";
import ErrorPage from "./shared_component/ErrorPage";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
