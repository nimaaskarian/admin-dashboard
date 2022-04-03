import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import GlobalStyle from "style";
import FontStyles from "fonts";

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <FontStyles />
    <App />
  </React.StrictMode>
);
