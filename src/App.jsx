import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./shared_component/RootLayout";
import ErrorPage from "./shared_component/ErrorPage";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Service";
import Scroll from "./pages/Scroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/about", element: <AboutPage /> },
      { path: "/service", element: <ServicesPage /> },
      { path: "/contact", element: <Scroll /> },

      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
