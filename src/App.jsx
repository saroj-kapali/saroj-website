import React from "react";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./shared_component/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      { path: "*", element: <Error /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
