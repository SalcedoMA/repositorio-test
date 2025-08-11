import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // This makes it the default child route
        element: <Home />, // The component to render for the default route
      },
      // {
      //   path: "about", // Will match /about
      //   element: <About />,
      // },
      // {
      //   path: "contact", // Will match /contact
      //   element: <Contact />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
