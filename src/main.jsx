import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ScrollProvider } from "./hooks/useScrollToSection.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ScrollProvider>
    <App />
  </ScrollProvider>
);
