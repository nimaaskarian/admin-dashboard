import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#e0e3eb",
    subBackground: "#f0f0f0",
  },
  fonts: ["Iran Sans"],
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default Theme;
