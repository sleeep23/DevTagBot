import React from "react";
import ReactDOM from "react-dom/client";
import { RoutePaths } from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <RoutePaths />
  </BrowserRouter>
);
