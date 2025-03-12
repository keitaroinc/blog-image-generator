import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import ReactGA from "react-ga4";

ReactGA.initialize(import.meta.env.VITE_GTAG);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
