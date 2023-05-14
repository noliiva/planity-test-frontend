import React from "react";
import ReactDOM from "react-dom/client";

import BoxRDV from "./components/BoxRDV";

import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BoxRDV />
  </React.StrictMode>
);
