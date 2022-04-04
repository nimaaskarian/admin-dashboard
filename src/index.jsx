import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import GlobalStyle from "style";
import FontStyles from "fonts";
import Theme from "Theme";

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <FontStyles />
      <App />
    </Theme>
  </React.StrictMode>
);
