import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import Context from "./context/Context.jsx";
import { Toaster } from "sonner";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <Toaster richColors position="bottom-right" />
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Context>
  </React.StrictMode>
);
