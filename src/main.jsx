import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { MenuItemPage } from "./components/MenuItemPage/MenuItemPage.jsx";
import { MenuItem } from "./components/MenuItem/MenuItem.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/MenuItem",
    element: <MenuItem />,
  },
  {
    path: "MenuItem/:name",
    element: <MenuItemPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
